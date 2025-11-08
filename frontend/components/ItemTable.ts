import { html, css, LitElement } from 'lit';
import { Item } from '../item';
import { customElement } from 'lit/decorators.js';


import './table.css';

export interface ItemTableProps {
	items: Item[];
}

@customElement('item-table')
export class ItemTable extends LitElement {
	declare items: string[];

	static properties = {
		items: { type: Array },
	};

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

thead th:first-child,
tbody td:first-child {
	width: 70%;
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
		</tr>
	</thead>
	<tbody>
		${(this.items.length === 0) ? html`<tr><td colspan="3">No Items Checked Out</td></tr>` : ''}
		${this.items.map(
			(item: Item) => html`
			<tr>
				<td>${item.title}</td>
				<td>${item.author}</td>
				<td>${item.dueDate}</td>
			</tr>
			`
		)}
	</tbody>
</table>
	`
	}
}
