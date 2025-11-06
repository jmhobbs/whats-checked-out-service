import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import type { ItemTableProps } from './ItemTable';
import './ItemTable';

const meta = {
	title: 'Item Table',
	tags: ['autodocs'],
	render: (args) => html`<item-table .items=${args.items}></item-table>`,
} satisfies Meta<ItemTableProps>;

export default meta;
type Story = StoryObj<ItemTableProps>;

export const Full: Story = {
	args: {
		items: ['One'],
	},
};

export const Empty: Story = {
	args: {
		items: [],
	},
};
