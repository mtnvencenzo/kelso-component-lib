import type { Meta, StoryObj } from '@storybook/react';
import NavigableTable, { NavigableTableProps, NavigableTableRow } from 'src/lib/components/organisms/NavigableTable/NavigableTable';
import Button from 'src/lib/components/atoms/Button/Button';
import { AddField } from 'src/lib/components';

const headers: string[] = ['Cocktail Name', 'Cocktail ID'];

const rows: NavigableTableRow[] = [
    { tds: ['New York Sour', '129219-92991109-321908-224434-3375345'], id: '1' },
    { tds: ['Pimms Cup', '165219-924451109-322408-224434-3235345'], id: '2' },
    { tds: ['Paloma', '02999-22991109-344908-244434-33752345'], id: '3' },
    { tds: ['Marghrita', '0907-9997879-5562-224445634-456456'], id: '4' },
    { tds: ['Gin Sour', '4564-226-67832-87678-09979'], id: '5' },
    { tds: ['Pisco Sour', '66645-456456-321902228-56-00004'], id: '6' },
    { tds: ['Rome With a View', '123-92991109-321908-224434-3375345'], id: '7' },
    { tds: ['The Last Word', '54554-92991109-321908-224434-3375345'], id: '8' },
    { tds: ['Martini', '2324-2323423-321908-224434-3375345'], id: '9' },
    { tds: ['Gin Daisy', '556888-9564657-321908-224434-3375345'], id: '10' },
    { tds: ['Jungle Bird', '00886-353345-321908-66343-3375345'], id: '11' }
];

const handleClick = (rowName: NavigableTableRow) => {
    alert(`${rowName?.tds[0]?.toLocaleString() ?? ''} clicked`);
};

const handleAddClick = (input: string) => {
    alert(`${input} added`);
};

function handleButtonClick() {
    alert('The button was clicked');
}

const addFieldProps = {
    inputValue: '',
    onClick: handleAddClick,
    maxLength: 100,
    placeholderText: 'Add new cocktail receipe'
};

const tableProps: NavigableTableProps = {
    handleClick: handleClick,
    tableHeaders: headers,
    tableRows: rows,
    maxHeight: 440,
    filterByColIndex: 0,
    headerElements: [<AddField {...addFieldProps} />, <Button label='Add' variant='secondary' handleClick={handleButtonClick} disabled={false} buttonType='button' />]
};

const meta = {
    title: 'Components/Organisims/NavigableTable',
    component: NavigableTable,
    tags: ['autodocs'],
    parameters: {
        layout: 'fulscreen'
    },
    argTypes: {}
} satisfies Meta<typeof NavigableTable>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
    args: { ...tableProps }
};
