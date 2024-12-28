import type { Meta, StoryObj } from '@storybook/react';
import FilterableTable, { FilterableTableProps, FilterableTableRow } from 'src/lib/components/organisms/FilterableTable/FilterableTable';
import Button from 'src/lib/components/atoms/Button/Button';

const headers: string[] = ['Cocktail Name', 'Cocktail ID'];

const rows: FilterableTableRow[] = [
    { tds: ['New York Sour', '129219-92991109-321908-224434-3375345'] },
    { tds: ['Pimms Cup', '165219-924451109-322408-224434-3235345'] },
    { tds: ['Paloma', '02999-22991109-344908-244434-33752345'] },
    { tds: ['Marghrita', '0907-9997879-5562-224445634-456456'] },
    { tds: ['Gin Sour', '4564-226-67832-87678-09979'] },
    { tds: ['Pisco Sour', '66645-456456-321902228-56-00004'] },
    { tds: ['Rome With a View', '123-92991109-321908-224434-3375345'] },
    { tds: ['The Last Word', '54554-92991109-321908-224434-3375345'] },
    { tds: ['Martini', '2324-2323423-321908-224434-3375345'] },
    { tds: ['Gin Daisy', '556888-9564657-321908-224434-3375345'] },
    { tds: ['Jungle Bird', '00886-353345-321908-66343-3375345'] }
];

function onClick(text: string) {
    alert(`${text} to add`);
}

function handleClick() {
    alert('The button was clicked');
}

const tableProps: FilterableTableProps = {
    tableTitle: '',
    tableHeaders: headers,
    tableRows: rows,
    maxHeight: 440,
    filterByColIndex: 0,
    showAdd: true,
    addFieldProps: {
        inputValue: '',
        onClick: onClick,
        maxLength: 100,
        placeholderText: 'Add new cocktail receipe'
    },
    headerElements: <Button label='Add' variant='secondary' handleClick={handleClick} disabled={false} buttonType='button' />
};

const meta = {
    title: 'Components/Organisims/FilterableTable',
    component: FilterableTable,
    tags: ['autodocs'],
    parameters: {
        layout: 'fulscreen'
    },
    argTypes: {}
} satisfies Meta<typeof FilterableTable>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
    args: { ...tableProps }
};
