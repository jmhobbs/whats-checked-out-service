import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

import { type LogMessage } from '../components/LogView';

import '../components/LoginForm';
import '../components/LogView';

export interface MainPageProps {
	subdomain?: string;
	messages: LogMessage[];
}

@customElement('main-page')
export class Main extends LitElement {
	declare subdomain?: string;
	declare messages: LogMessage[];

	static properties = {
		subdomain: { type: String },
		messages: { type: Array },
	};

	static styles = css`
	`;

	render() {
			return html`
			<div class="hide-on-print">
				<h1>What's Checked Out?</h1>
				<p>Enter your library account details below to see what items you have checked out, including across all your linked accounts.</p>
				<login-form .subdomain=${this.subdomain}></login-form>
				<log-view .messages=${this.messages}></log-view>
			</div>
		`
	}

}
