import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

export interface DateDisplayProps {
	date: string;
}

@customElement('date-display')
export class DateDisplay extends LitElement {
	declare date: string;

	static properties = {
		date: { type: String },
	};

	render() {
		let date = new Date(Date.parse(`${this.date}T00:00:00`));
		return html`${date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}`
	}
}
