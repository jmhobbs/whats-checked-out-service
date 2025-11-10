import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

export type LoginFormSubmitCallback = (subdomain: string, username: string, password: string) => void;

export interface LoginFormProps {
	subdomain?: string;
	onSubmit?: LoginFormSubmitCallback;
}

@customElement('login-form')
export class LoginForm extends LitElement {
	declare subdomain?: string;
	declare onSubmit?: LoginFormSubmitCallback;

	static properties = {
		subdomain: { type: String },
		onSubmit: { type: Function },
	};

	static styles = css`
label,
button {
	display: block;
	margin-top: 1em;
}
input {
	display: block;
}
code > input,
input[type='checkbox'] {
	display: inline;
}
form {
	background: #f9f9f9;
	padding: 10px;
	border: 1px solid #ccc;
}
	`;

	render() {
			return html`
			<form @submit=${this._onSubmit}>
				<label for="library">Library:</label>
				<code><input type="text" id="library" name="library" value="${this.subdomain}" required />.biblionix.com</code>

				<label for="username">Account/Username:</label>
				<input type="text" id="username" name="username" required />

				<label for="password">Password:</label>
				<input type="password" id="password" name="password" required />

				<button type="submit">See What's Checked Out</button>

				<div id="status"></div>
			</form>
		`
	}

	_onSubmit(e: Event) {
		e.preventDefault();
		if(this.onSubmit) {
			this.onSubmit(
				this.renderRoot.querySelector<HTMLInputElement>('#library')!.value,
				this.renderRoot.querySelector<HTMLInputElement>('#username')!.value,
				this.renderRoot.querySelector<HTMLInputElement>('#password')!.value,
			);
		}
		return false;
	}
}


