import type { Meta, StoryObj } from '@storybook/react';
import IconButton from 'src/lib/components/atoms/IconButton/IconButton';

import GroupIcon from '@mui/icons-material/Group';

const clickButton = () => {
    alert('IconButton has been clicked.');
};

const props = {
    handleClick: clickButton,
    id: 'icn-button',
    icon: <GroupIcon />
};

const meta: Meta<typeof IconButton> = {
    title: 'Components/Atoms/IconButton',
    component: IconButton,
    tags: ['autodocs'],
    argTypes: {}
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
    args: { ...props }
};
