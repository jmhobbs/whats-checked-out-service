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
		const cardsFetched = new Set();

		try {
			logger.info('Logging in...');
			const sessionId = await api.login(username, password);

			logger.info('Fetching account information...');
			const accountData = await api.account(sessionId);

			main.items = accountData.items;
			cardsFetched.add(accountData.cardNumber);

			for (const cardNumber of accountData.linkedCards) {
				if(cardsFetched.has(cardNumber)) {
					continue
				}

				cardsFetched.add(cardNumber);
				try {
					logger.info(`Fetching linked card ${cardNumber}...`);
					const linkedSessionId = await api.login(cardNumber!, password);
					const linkedAccountData = await api.account(linkedSessionId);
					main.items = [...main.items, ...linkedAccountData.items];
				} catch (e) {
					logger.warning(e);
				}
			}
			logger.info('Done!');

		} catch (e) {
			logger.error(e);
		}
	}

	document.getElementById('root')?.appendChild(main);
});
