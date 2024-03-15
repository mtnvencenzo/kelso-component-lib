import type { Meta, StoryObj } from '@storybook/react';
import ButtonList from 'src/lib/components/organisms/ButtonList/ButtonList';
import GroupIcon from '@mui/icons-material/Group';

const data = [
    { value: 'Item 1', id: 'id1' },
    { value: 'Item 2', id: 'id2' },
    { value: 'Item 3', id: 'id3' },
    { value: 'Item 4', id: 'id4' }
];

const addItem = (val: string) => {
    console.log({ value: val, id: val });
};
const editItem = (val: string, id: string) => {
    console.log(val, id);
};
const props = {
    data: data,
    maxWidth: '100%',
    listTitle: 'List Title',
    addInputValue: '',
    addItemOnClick: addItem,
    editItemOnClick: editItem,
    addFieldMaxLength: 100,
    icon: <GroupIcon />,
    showAddField: true,
    listMaxHigh: 100
};

const meta = {
    title: 'Components/Organisims/ButtonList',
    component: ButtonList,
    tags: ['autodocs'],
    parameters: {
        layout: 'fulscreen'
    },
    argTypes: {}
} satisfies Meta<typeof ButtonList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
    args: {...props}
};
