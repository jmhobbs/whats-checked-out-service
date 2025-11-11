import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

import './DateDisplay'

export interface Item {
	title: string;
	author: string;
	dueDate: string;
}

export interface ItemTableProps {
	items: Item[];
	account?: string;
}

@customElement('item-table')
export class ItemTable extends LitElement {
	declare items: Item[];
	declare account?: string;

	static properties = {
		items: { type: Array },
		account: { type: String },
	};

	constructor() {
		super();
		this.items = [];
		this.account = undefined;
	}

	static styles = css`
table {
	width: 100%;
	border-collapse: collapse;
	margin-top: 1em;
	border: 1px solid #444;
}

th,
tr:nth-child(even) td {
	background-color: #f4f4f4;
}

th,
td {
	text-align: left;
	padding: 15px 10px;
}

th {
	border-bottom: 2px solid #444;
}
	`;

	render() {
		return html`
<table>
	<thead>
		<tr>
			<th>Title</th>
			<th>Author</th>
			<th>Due Date</th>
			<th>Account</th>
		</tr>
	</thead>
	<tbody>
		${(this.items.length === 0) ? html`<tr><td colspan="3">No Items Checked Out</td></tr>` : ''}
		${this.items.map(
			(item: Item) => html`
			<tr>
				<td>${item.title}</td>
				<td>${item.author}</td>
				<td><date-display .date=${item.dueDate} /></td>
				<td>${this.account}</td>
			</tr>
			`
		)}
	</tbody>
</table>
	`
	}
}
