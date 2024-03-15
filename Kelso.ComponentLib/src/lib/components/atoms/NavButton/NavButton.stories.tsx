import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import NavButton from 'src/lib/components/atoms/NavButton/NavButton';

const meta: Meta<typeof NavButton> = {
    title: 'Components/Atoms/NavButton',
    component: NavButton,
    tags: ['autodocs'],
    argTypes: {
        visible: {
            control: 'boolean',
            defaultValue: true
        }
    },
    args: {
        visible: true,
        label: 'Test'
    },
    render: (args) => (
        <MemoryRouter>
            <NavButton {...args} />
        </MemoryRouter>
    )
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = { }
