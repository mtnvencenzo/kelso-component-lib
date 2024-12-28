import type { Meta, StoryObj } from '@storybook/react';
import HeaderNavBar from 'src/lib/components/organisms/HeaderNavBar/HeaderNavBar';
import { BrowserRouter } from 'react-router-dom';
import { RouterTabProps } from 'src/lib/components/atoms/RouterTab/RouterTab';
import { RouterTabPanelProps } from 'src/lib/components/molecules/RouterTabPanel/RouterTabPanel';

const meta = {
    title: 'Components/Organisims/HeaderNavBar',
    component: HeaderNavBar,
    tags: ['autodocs'],
    parameters: {
        layout: 'fulscreen'
    },
    argTypes: {}
} satisfies Meta<typeof HeaderNavBar>;

export default meta;

type Story = StoryObj<typeof meta>;

const tabsList: Array<RouterTabProps> = [
    {
        to: '/',
        label: 'Tab Home',
        variant: 'header'
    },
    {
        to: '/second',
        label: 'Tab Second',
        variant: 'header'
    },
    {
        to: '/third',
        label: 'Tab Third',
        variant: 'header'
    },
    {
        to: '/fourth',
        label: 'Tab Fourth',
        variant: 'header'
    },
    {
        to: '/fifth',
        label: 'Tab Fifth',
        variant: 'header'
    }
];

const tabPanel: RouterTabPanelProps = {
    tabsList: tabsList,
    variant: 'header'
};

export const Base: Story = {
    args: {
        appTitle: 'App Title',
        tabInfo: tabPanel
    },
    render: (args) => {
        const { appTitle, tabInfo } = args;

        return (
            <BrowserRouter>
                <HeaderNavBar tabInfo={tabInfo} appTitle={appTitle} />
            </BrowserRouter>
        );
    }
};
