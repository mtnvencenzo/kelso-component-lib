import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import RouterTab from 'src/lib/components/atoms/RouterTab/RouterTab';

const meta: Meta<typeof RouterTab> = {
    title: 'Components/Atoms/RouterTab',
    component: RouterTab,
    tags: ['autodocs'],
    argTypes: {}
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
    render: () => (
        <BrowserRouter>
            <nav className='nov-horizontal'>
                <ul>
                    <RouterTab to={'/'} label='Tab1' testId='tab1' />
                    <RouterTab to={'/tab2'} label='Tab2' testId='tab2' />
                </ul>
            </nav>
        </BrowserRouter>
    )
};

export const HeaderBase: Story = {
    render: () => (
        <BrowserRouter>
            <nav className='nov-horizontal'>
                <ul>
                    <RouterTab to={'/'} label='Header Tab 1' testId='tab1' variant='header' />

                    <RouterTab to={'/tab2'} label='Header Tab 2' testId='tab2' variant='header' />
                </ul>
            </nav>
        </BrowserRouter>
    )
};
