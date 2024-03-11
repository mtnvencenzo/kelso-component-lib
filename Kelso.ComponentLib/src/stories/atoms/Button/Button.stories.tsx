import type { Meta, StoryObj } from '@storybook/react';
import Button from 'src/lib/components/atoms/Button/Button';

const meta: Meta<typeof Button> = {
    title: 'Components/Atoms/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: { type: 'select' },
            options: [ 'primary', 'reset', 'tertiary']
        },
        buttonType: {
            control: { type: 'select' },
            options: ['submit', 'reset', 'button']
        },
        size: {
            control: { type: 'select' },
            options: ['small', 'medium', 'large']
        },
        disabled: {
            control: 'boolean'
        }
    }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        label: 'Button',
        variant: 'primary',
        handleClick: () => alert('Primary story button pressed')
    }
};

export const Secondary: Story = {
    args: {
        label: 'Button',
        variant: 'secondary',
        handleClick: () => alert('Secondary story button pressed')
    }
};
