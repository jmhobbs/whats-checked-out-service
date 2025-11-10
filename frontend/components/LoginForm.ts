import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

export interface LoginFormProps {
	subdomain?: string;
	onSubmit?: (e: Event) => void;
}

@customElement('login-form')
export class LoginForm extends LitElement {
	declare subdomain?: string;
	declare onSubmit?: (e: Event) => void;

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
	padding: 1em;
	border: 1px solid #ddd;
	border-radius: 5px;
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
		console.log('on submit', this.onSubmit);
		if(this.onSubmit) {
			this.onSubmit(e);
		}
		return false;
	}
}


