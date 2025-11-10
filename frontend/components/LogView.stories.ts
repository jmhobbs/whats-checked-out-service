import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import type { LogViewProps } from './LogView';
import './LogView';

const meta = {
	title: 'Components/Log View',
	tags: ['autodocs'],
	render: (args) => html`<log-view .messages=${args.messages}></log-view>`,
} satisfies Meta<LogViewProps>;

export default meta;
type Story = StoryObj<LogViewProps>;

export const Full: Story = {
	args: {
			messages :[
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


export const Scroll: Story = {
	args: {
		messages: Array.from({ length: 50 }, (_, i) => ({level: 'info', message: `Log message ${i}`})),
	},
}
