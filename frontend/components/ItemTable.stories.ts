import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import type { ItemTableProps } from './ItemTable';
import './ItemTable';

const meta = {
	title: 'Components/Item Table',
	tags: ['autodocs'],
	render: (args) => html`<item-table .items=${args.items} .account=${args.account} ></item-table>`,
} satisfies Meta<ItemTableProps>;

export default meta;
type Story = StoryObj<ItemTableProps>;

export const Full: Story = {
	args: {
		items: [
			{
				title: 'The Three Miusketeers',
				author: 'Dumas, Alexandre',
				dueDate: '2024-07-01',
			},
			{
				title: 'Pride and Prejudice',
				author: 'Austen, Jane',
				dueDate: '2024-07-15',
			},
			{
				title: 'Cryptonomicon',
				author: 'Stephenson, Neal',
				dueDate: '2024-08-01',
			}
		],
		account: 'John Hobbs',
	},
};

export const Empty: Story = {
	args: {
		items: [],
	},
};
