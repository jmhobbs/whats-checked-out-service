import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import type { MainPageProps } from './Main';
import './Main';

const meta = {
	title: 'Pages/Main',
	tags: ['autodocs'],
	render: (args) => html`
		<main-page
			.messages=${args.messages}
			.subdomain=${args.subdomain}
			.items=${args.items}
		></main-page>`,
} satisfies Meta<MainPageProps>;

export default meta;
type Story = StoryObj<MainPageProps>;

export const Full: Story = {
	args: {
		subdomain: 'example',
		messages: [
				{
					message: '🙌 Good as gold and right as rain...',
					level: 'info',
				},
				{
					message: '⚠ Something is not right...',
					level: 'warning',
				},
				{
					message: 'This is fine. 🔥 🐶 🔥',
					level: 'error',
				},
				{
					message: '🙌 Good as gold and right as rain...',
					level: 'info',
				},
				{
					message: '⚠ Something is not right...',
					level: 'warning',
				},
				{
					message: 'This is fine. 🔥 🐶 🔥',
					level: 'error',
				},
				{
					message: '🙌 Good as gold and right as rain...',
					level: 'info',
				},
				{
					message: '⚠ Something is not right...',
					level: 'warning',
				},
				{
					message: 'This is fine. 🔥 🐶 🔥',
					level: 'error',
				},
				{
					message: '🙌 Good as gold and right as rain...',
					level: 'info',
				},
				{
					message: '⚠ Something is not right...',
					level: 'warning',
				},
				{
					message: 'This is fine. 🔥 🐶 🔥',
					level: 'error',
				},
		],
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
		]
	},
};

export const Empty: Story = {
	args: {
		messages: [],
		items: [],
	},
};
