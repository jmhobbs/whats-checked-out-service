import { type Main } from './page/Main';
import { Logger } from './logger';
import { Client } from '../biblionix/client';

import './page/Main';

document.addEventListener('DOMContentLoaded', () => {
	const main = document.createElement('main-page') as Main;
	main.subdomain = 'blair';
	main.messages = [];

	const logger = new Logger(main);
	logger.info("Welcome!  Let's see what's checked out!");
	main.onSubmit = async (subdomain: string, username: string, password: string) => {
		const api = new Client(subdomain);
		try {
			logger.info('Logging in...');
			const sessionId = await api.login(username, password);
			logger.info('Logged in! Fetching account information...');
			console.log(sessionId);
		} catch (e) {
			logger.error(e);
		}
	}

	document.getElementById('root')?.appendChild(main);
});
