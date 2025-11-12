import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

import{ type Item } from '../components/ItemTable';
import { type LogMessage } from '../components/LogView';
import { type LoginFormSubmitCallback } from '../components/LoginForm';

import '../components/LoginForm';
import '../components/LogView';
import '../components/ItemTable';

export interface MainPageProps {
	subdomain?: string;
	messages: LogMessage[];
	items: Item[];
	onSubmit?: LoginFormSubmitCallback
}

@customElement('main-page')
export class Main extends LitElement {
	declare subdomain?: string;
	declare messages: LogMessage[];
	declare items: Item[];
	declare onSubmit?: LoginFormSubmitCallback;

	static properties = {
		subdomain: { type: String },
		messages: { type: Array },
		items: { type: Array },
		onSubmit: { type: Function },
	};

	static styles = css`
	.row > * {
		display: block;
		margin-bottom: 10px;
	}

	@media (min-width: 700px) {
		.row {
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			width: 100%;
			column-gap: 10px;
		}
		.row > * {
			display: flex;
			flex-direction: column;
			flex-basis: 100%;
			flex: 1;
			min-height: 100%;
		}
	}

	@media print {
		.hide-on-print {
			display: none;
		}
	}
	`;

	render() {
			return html`
			<div class="hide-on-print">
				<h1>What's Checked Out?</h1>
				<p>Enter your library account details below to see what items you have checked out, including across all your linked accounts.</p>
				<div class="row">
					<login-form .subdomain=${this.subdomain} .onSubmit=${this.onSubmit}></login-form>
					<log-view .messages=${this.messages}></log-view>
				</div>
			</div>
			<item-table .items=${this.items}></item-table>
		`
	}
}
