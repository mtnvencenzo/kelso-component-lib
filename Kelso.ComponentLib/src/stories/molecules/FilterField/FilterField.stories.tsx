import type { Meta, StoryObj } from '@storybook/react';
import FilterField from 'src/lib/components/molecules/FilterField/FilterField';

const meta: Meta<typeof FilterField> = {
    title: 'Components/Molecules/FilterField',
    component: FilterField,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen'
    },
    argTypes: {}
} satisfies Meta<typeof FilterField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
    args: {
        onFilter: (text) => {
            alert(text);
        }
    }
};
