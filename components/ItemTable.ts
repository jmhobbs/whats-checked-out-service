import { html } from 'lit';

import './table.css';

export interface ItemTableProps {
  items: string[];
}
export const ItemTable = ({ items }: ItemTableProps) => {
  return html`
	<p>Item Table Component - items: ${items.length}</p>
  `;
};
