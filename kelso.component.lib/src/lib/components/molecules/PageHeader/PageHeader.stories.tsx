import type { Meta, StoryObj } from '@storybook/react';
import PageHeader from 'src/lib/components/molecules/PageHeader/PageHeader';
import { MemoryRouter } from 'react-router-dom';

const meta: Meta<typeof PageHeader> = {
    title: 'Components/Molecules/PageHeader',
    component: PageHeader,
    tags: ['autodocs'],
    args: {
        tabList: [
            {
                id: 'overview-tab',
                testId: 'overview-tab',
                label: 'Overview',
                to: '',
                visible: true
            }
        ],
        pageTitle: 'My Page Title',
        showAlert: true,
        showSearch: true
    },
    render: (args) => (
        <MemoryRouter>
            <PageHeader {...args} />
        </MemoryRouter>
    )
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {};
