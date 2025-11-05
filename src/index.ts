export default {
	async fetch(request, env, ctx): Promise<Response> {
		const url = new URL(request.url);

		if (request.method === 'POST' && request.headers.get('content-type')?.includes('form')) {
			const formData = await request.formData();
			const subdomain = formData.get('library')!.toString();

			switch (url.pathname) {
				case '/api/login':
					const loginFormData = new FormData();
					loginFormData.append('username', formData.get('username')!.toString());
					loginFormData.append('password', formData.get('password')!.toString());

					return fetch(`https://${subdomain}.biblionix.com/catalog/ajax_backend/login.xml.pl`, {
						method: 'POST',
						body: loginFormData,
					});
				case '/api/account':
					const accountFormData = new FormData();
					accountFormData.append('session', formData.get('session')!.toString());

					return fetch(`https://${subdomain}.biblionix.com/catalog/ajax_backend/account.xml.pl`, {
						method: 'POST',
						body: accountFormData,
					});
			}
		}

		return env.ASSETS.fetch(request);
	},
} satisfies ExportedHandler<Env>;
