import type { Meta, StoryObj } from '@storybook/react';
import ThreeDotMenu from 'src/lib/components/atoms/ThreeDotMenu/ThreeDotMenu';

const meta: Meta<typeof ThreeDotMenu> = {
    title: 'Components/Atoms/ThreeDotMenu',
    component: ThreeDotMenu,
    tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
    args: {
        options: ['Item 1', 'Item 2']
    }
};
