import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import type { LoginFormProps } from './LoginForm';
import './LoginForm';

const meta = {
	title: 'Login Form',
	tags: ['autodocs'],
	render: (args) => html`<login-form .subdomain=${args.subdomain} .onSubmit=${args.onSubmit}></login-form>`,
} satisfies Meta<LoginFormProps>;

export default meta;
type Story = StoryObj<LoginFormProps>;

export const Full: Story = {
	args: {
		subdomain: 'example',
	},
};

export const Empty: Story = {};

