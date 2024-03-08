import type { Meta, StoryObj } from '@storybook/react';
import RouterTabPanel from 'src/lib/components/molecules/RouterTabPanel/RouterTabPanel';
import { BrowserRouter } from 'react-router-dom';

const props = {
    tabsList: [
        { to: '/', label: '' },
        { to: 'Tab2', label: 'Tab 2' },
        { to: 'Tab3', label: 'Tab 3' },
        { to: 'Tab4', label: 'Tab 4' }
    ]
};

const meta: Meta<typeof RouterTabPanel> = {
    title: 'Components/Molecules/RouterTabPanel',
    component: RouterTabPanel,
    tags: ['autodocs'],
    argTypes: {}
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
    render: () => (
        <BrowserRouter>
            <RouterTabPanel {...props} />
        </BrowserRouter>
    )
};

export const HeaderBase: Story = {
    render: () => (
        <BrowserRouter>
            <RouterTabPanel variant='header' {...props} />
        </BrowserRouter>
    )
};