import { type Main } from './page/Main';
import { Logger } from './logger';
import { Client } from '../biblionix/client';

import './page/Main';

document.addEventListener('DOMContentLoaded', () => {
	const main = document.createElement('main-page') as Main;
	main.subdomain = 'blair';
	main.messages = [];
	main.items = [];

	const logger = new Logger(main);
	logger.info("Welcome!  Let's see what's checked out!");
	main.onSubmit = async (subdomain: string, username: string, password: string) => {
		const api = new Client(subdomain);
		try {
			logger.info('Logging in...');
			const sessionId = await api.login(username, password);
			logger.info('Logged in! Fetching account information...');
			console.log(sessionId);

			const accountData = await api.account(sessionId);
			logger.info(`Fetched account data...`);

			main.items = accountData.items;
		} catch (e) {
			logger.error(e);
			return;
		}
	}

	document.getElementById('root')?.appendChild(main);
});
