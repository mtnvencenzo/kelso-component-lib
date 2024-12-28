import type { Meta, StoryObj } from '@storybook/react';
import Header from 'src/lib/components/atoms/Header/Header';
import customLogo from '../../../assets/generic-logo-2.png';

const meta = {
    title: 'Components/Atoms/Header',
    component: Header,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen'
    },
    argTypes: {}
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
    args: { appTitle: 'Custom Cocktail Receipes' }
};

export const WithCustomLogo: Story = {
    args: { appTitle: 'Custom Cocktail Receipes', logo: customLogo }
};
