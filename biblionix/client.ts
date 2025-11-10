import { Item } from '../frontend/components/ItemTable';

const xmlParser = new DOMParser();

export class Client {
	private subdomain: string;

	constructor(subdomain: string) {
		this.subdomain = subdomain;
	}

	async login(username: string, password: string) {
		const form = new FormData()
		form.append('library', this.subdomain);
		form.append('username', username);
		form.append('password', password);

		const response = await fetch('/api/login', {
			method: 'POST',
			body: form,
		});

		if (!response.ok) {
			throw new Error('Invalid username or password');
		}

		const login = xmlParser.parseFromString(await response.text(), 'application/xml');
		const sessionId = login.querySelector('root')?.getAttribute('session');

		if(!sessionId) {
			throw new Error('Invalid login response from server');
		}

		return sessionId;
	}

	async account(sessionId: string) {
		const accountFormData = new FormData();
		accountFormData.append('library', this.subdomain);
		accountFormData.append('session', sessionId);

		const accountResponse = await fetch('/api/account', {
			method: 'POST',
			body: accountFormData,
		});

		if (!accountResponse.ok) {
			throw new Error('Error fetching account data');
		}

		const account = xmlParser.parseFromString(await accountResponse.text(), 'application/xml');

		const accountName = account.querySelector('name')?.getAttribute('printable');

		if(!accountName) {
			throw new Error('Invalid account response from server');
		}

		const items: Item[] = [...(account.querySelectorAll('item') || [])].map((xmlItem) => ({
			title: deobfuscate(xmlItem.getAttribute('title') || ''),
			author: deobfuscate(xmlItem.getAttribute('author') || ''),
			dueDate: xmlItem.getAttribute('due_raw') || '',
		}));

		return {
			name: accountName,
			items,
		};
	}

}

function deobfuscate(input: string) {
	return input.replaceAll('­', '');
}
