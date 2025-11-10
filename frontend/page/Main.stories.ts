import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import type { MainPageProps } from './Main';
import './Main';

const meta = {
	title: 'Pages/Main',
	tags: ['autodocs'],
	render: (args) => html`<main-page .messages=${args.messages} .subdomain=${args.subdomain}></main-page>`,
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
	},
};

export const Empty: Story = {
	args: {
		messages: [],
	},
};
