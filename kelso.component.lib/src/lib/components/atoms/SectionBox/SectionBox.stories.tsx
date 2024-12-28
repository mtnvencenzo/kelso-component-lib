import { Divider } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react';
import SectionBox from 'src/lib/components/atoms/SectionBox/SectionBox';

const meta: Meta<typeof SectionBox> = {
    title: 'Components/Atoms/SectionBox',
    component: SectionBox,
    tags: ['autodocs'],
    args: {
        width: '500px',
        height: '200px',
        children: (
            <>
                <text style={{ padding: '0.75rem' }}>Test Example</text>
                <Divider />
            </>
        )
    },
    render: (args) => <SectionBox {...args} />
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {};
