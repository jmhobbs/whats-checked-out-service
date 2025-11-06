import type { Meta, StoryObj } from '@storybook/web-components-vite';

import type { ItemTableProps } from './ItemTable';
import { ItemTable } from './ItemTable';

const meta = {
  title: 'Item Table',
  tags: ['autodocs'],
  render: (args) => ItemTable(args),
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

