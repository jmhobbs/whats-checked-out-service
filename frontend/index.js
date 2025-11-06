const xmlParser = new DOMParser();

document.addEventListener('DOMContentLoaded', () => {
	const form = document.querySelector('form');
	const status = document.getElementById('status');

	form.addEventListener('submit', async (event) => {
		event.preventDefault();

		status.classList.remove('error');
		status.textContent = 'Logging in...';

		const response = await fetch('/api/login', {
			method: 'POST',
			body: new FormData(form),
		});

		if (!response.ok) {
			status.textContent = 'Login failed - please check your credentials.';
			status.classList.add('error');
			return;
		}

		const login = xmlParser.parseFromString(await response.text(), 'application/xml');
		const sessionId = login.querySelector('root').getAttribute('session');

		status.textContent = 'Logged in, fetching account data...';

		const accountFormData = new FormData();
		accountFormData.append('session', sessionId);
		accountFormData.append('library', form.library.value);

		const accountResponse = await fetch('/api/account', {
			method: 'POST',
			body: accountFormData,
		});

		if (!accountResponse.ok) {
			status.textContent = 'Error fetching account data.';
			status.classList.add('error');
			return;
		}

		status.textContent = 'Account data fetched!';

		const account = xmlParser.parseFromString(await accountResponse.text(), 'application/xml');

		// temporary for debugging
		window.__account = account;

		const items = account.querySelectorAll('item');
		const tbody = document.querySelector('tbody');

		const accountName = account.querySelector('name').getAttribute('printable');

		items.forEach((item) => {
			const tr = document.createElement('tr');
			const title = document.createElement('td');
			title.textContent = item.getAttribute('title').replaceAll('­', '');
			const author = document.createElement('td');
			author.textContent = item.getAttribute('author').replaceAll('­', '');
			const dueDate = document.createElement('td');
			dueDate.textContent = item.getAttribute('due_raw');
			const accountCell = document.createElement('td');
			accountCell.textContent = accountName;
			tr.appendChild(title);
			tr.appendChild(author);
			tr.appendChild(dueDate);
			tr.appendChild(accountCell);
			tbody.appendChild(tr);
		});

		status.textContent = `Loaded ${items.length} items for account ${accountName}.`;

		return false;
	});
});
