import type { Meta, StoryObj } from '@storybook/react';
import AutoCompleteTextField from 'src/lib/components/molecules/AutoCompleteTextField/AutoCompleteTextField';

const meta: Meta<typeof AutoCompleteTextField> = {
    title: 'Components/Molecules/AutoCompleteTextField',
    component: AutoCompleteTextField,
    tags: ['autodocs']
} satisfies Meta<typeof AutoCompleteTextField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
    args: {
        options: [
            { value: 'Pimms Cup', id: 'pimmsCup' },
            { value: 'New York Sour', id: 'newYorkSour' },
            { value: 'Rome With a View', id: 'romeWithAView' }
        ],
        placeHolderText: 'Cocktail Receipes',
        onChange: (text) => {
            alert(text);
        }
    }
};
