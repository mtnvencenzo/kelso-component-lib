import type { Meta, StoryObj } from '@storybook/react';
import AddField from 'src/lib/components/molecules/AddField/AddField';

const meta = {
    title: 'Components/Molecules/AddField',
    component: AddField,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen'
    },
    argTypes: {}
} satisfies Meta<typeof AddField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
    args: {
        inputValue: '',
        placeholderText: 'Please enter your text here',
        onClick: (text) => {
            alert(text);
        },
        maxLength: 100
    }
};
