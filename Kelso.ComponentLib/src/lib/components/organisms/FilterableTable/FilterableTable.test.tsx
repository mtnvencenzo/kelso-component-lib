import { fireEvent, render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import FilterableTable, { FilterableTableProps, FilterableTableRow } from './FilterableTable';
import Button from '../../atoms/Button/Button';

const rows: FilterableTableRow[] = [
    { tds: [ 'New York Sour', '129219-92991109-321908-224434-3375345' ] },
    { tds: [ 'Pimms Cup', '165219-924451109-322408-224434-3235345' ] },
    { tds: [ 'Paloma', '02999-22991109-344908-244434-33752345' ] },
    { tds: [ 'Marghrita', '0907-9997879-5562-224445634-456456' ] },
    { tds: [ 'Gin Sour', '4564-226-67832-87678-09979' ] },
    { tds: [ 'Pisco Sour', '66645-456456-321902228-56-00004' ] },
    { tds: [ 'Rome With a View', '123-92991109-321908-224434-3375345' ] },
    { tds: [ 'The Last Word', '54554-92991109-321908-224434-3375345' ] },
    { tds: [ 'Martini', '2324-2323423-321908-224434-3375345' ] },
    { tds: [ 'Gin Daisy', '556888-9564657-321908-224434-3375345' ] },
    { tds: [ 'Jungle Bird', '00886-353345-321908-66343-3375345' ] },
];

describe('Filterable Table', () => {
    const headers: string[] = [ 'Cocktail Name', 'Cocktail ID'];

    function onClick(text: string): string {
        return text;
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
        headerElements: (
            <Button
                label='Add'
                variant='secondary'
                handleClick={handleClick}
                disabled={false}
                buttonType='button'
            />
        )
    };

    test('renders filter field', () => {
        render(<FilterableTable {...tableProps} />);

        const input = document.querySelector('input[name="FilterInputField"]') as HTMLInputElement;
        expect(input).toBeTruthy();

        input.value = 'Testing';
        expect(input.value).toBe('Testing');
        expect(input.type).toBe('text');
        expect(input.name).toBe('FilterInputField');
    });

    test('renders add field', () => {
        render(<FilterableTable {...tableProps} />);

        const input = document.querySelector('input[name="AddInputField"]') as HTMLInputElement;
        expect(input).toBeTruthy();

        input.value = 'Testing';
        expect(input.value).toBe('Testing');
        expect(input.type).toBe('text');
        expect(input.name).toBe('AddInputField');
    });

    test('renders header element button', () => {
        render(<FilterableTable {...tableProps} />);

        const button = document.getElementById('secondary-btn');
        expect(button).toBeTruthy();
        expect(button?.textContent).toBe('Add');
    });

    test('renders table headers', () => {
        render(<FilterableTable {...tableProps} />);

        const tableHeaders = screen.queryAllByRole('columnHeader');
        expect(tableHeaders.length).toBe(2);

        const firstHeader = screen.getByText(headers[0]);
        expect(firstHeader.textContent).toBe(headers[0]);

        const secondHeader = screen.getByText(headers[1]);
        expect(secondHeader.textContent).toBe(headers[1]);
    });

    test('renders table rows', () => {
        render(<FilterableTable {...tableProps} />);

        const tableRows = screen.queryAllByRole('row');
        expect(tableRows.length).toBe(12);

        const text = rows[9].tds[0]?.toLocaleString() ?? '';
        const row10 = screen.getByText(text);
        expect(row10.textContent).toBe(text);
    });

    test('filters table rows', () => {
        render(<FilterableTable {...tableProps} />);

        const input = screen.queryByPlaceholderText('Filter Table') as HTMLInputElement;
        fireEvent.change(input, { target: { value: 'gin' } });

        expect(input.name).toBe('FilterInputField');

        const tableRows = screen.queryAllByRole('row');
        expect(tableRows.length).toBe(3);
        expect(tableRows[1].children[0].textContent).toBe('Gin Sour');
        expect(tableRows[2].children[0].textContent).toBe('Gin Daisy');
    });
});