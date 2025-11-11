import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import type { DateDisplayProps } from './DateDisplay';
import './DateDisplay';

const meta = {
	title: 'Components/Date Display',
	tags: ['autodocs'],
	render: (args) => html`<date-display .date=${args.date} />`,
} satisfies Meta<DateDisplayProps>;

export default meta;
type Story = StoryObj<DateDisplayProps>;

export const Default: Story = {
	args: {
		date: '2012-07-05',
	},
};
