import type { Meta, StoryObj } from '@storybook/react';
import LoadingSkeleton from 'src/lib/components/atoms/LoadingSkeleton/LoadingSkeleton';

const meta: Meta<typeof LoadingSkeleton> = {
    component: LoadingSkeleton,
    title: 'Components/Atoms/LoadingSkeleton',
    argTypes: {}
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
    args: {}
}
