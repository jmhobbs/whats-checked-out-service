import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

import './DateDisplay'

export interface Account {
	cardNumber: string;
	name?: string;
}

export interface Item {
	title: string;
	author: string;
	dueDate: string;
	account?: Account;
}

export interface ItemTableProps {
	items: Item[];
}

@customElement('item-table')
export class ItemTable extends LitElement {
	declare items: Item[];

	static properties = {
		items: { type: Array },
	};

	constructor() {
		super();
		this.items = [];
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

code {
	background-color: #555;
	color: #fff;
	padding: 2px 5px;
	border-radius: 5px;
	vertical-align: top;
}
	`;

	render() {
		const account = (item: Item) => {
			if(item.account) {
				return html`${item.account?.name} <code>${item.account?.cardNumber}</code>`;
			}
		};

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
				<td>${account(item)}</td>
			</tr>
			`
		)}
	</tbody>
</table>
	`
	}
}
