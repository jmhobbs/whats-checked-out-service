import { html, LitElement } from 'lit';

import './table.css';

export interface ItemTableProps {
	items: string[];
}

export class ItemTable extends LitElement {
	declare items: string[];

	static properties = {
		items: { type: Array },
	};

	constructor() {
		super();
		this.items = [];
	}

	render() {
		return html` <p>Item Table Component - Items: ${this.items.length}</p> `;
	}
}

customElements.define('item-table', ItemTable);
