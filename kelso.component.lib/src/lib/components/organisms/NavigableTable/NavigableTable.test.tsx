import { fireEvent, render, screen } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';
import NavigableTable, { NavigableTableProps, NavigableTableRow } from './NavigableTable';
import Button from '@mui/material/Button';
import AddField from '../../molecules/AddField/AddField';

const rows: NavigableTableRow[] = [
    { tds: [ 'New York Sour', '129219-92991109-321908-224434-3375345' ], id: '1' },
    { tds: [ 'Pimms Cup', '165219-924451109-322408-224434-3235345' ], id: '2' },
    { tds: [ 'Paloma', '02999-22991109-344908-244434-33752345' ], id: '3' },
    { tds: [ 'Marghrita', '0907-9997879-5562-224445634-456456' ], id: '4' },
    { tds: [ 'Gin Sour', '4564-226-67832-87678-09979' ], id: '5' },
    { tds: [ 'Pisco Sour', '66645-456456-321902228-56-00004' ], id: '6' },
    { tds: [ 'Rome With a View', '123-92991109-321908-224434-3375345' ], id: '7' },
    { tds: [ 'The Last Word', '54554-92991109-321908-224434-3375345' ], id: '8' },
    { tds: [ 'Martini', '2324-2323423-321908-224434-3375345' ], id: '9' },
    { tds: [ 'Gin Daisy', '556888-9564657-321908-224434-3375345' ], id: '10' },
    { tds: [ 'Jungle Bird', '00886-353345-321908-66343-3375345' ], id: '11' },
];

describe('Navigable Table', () => {
    const headers: string[] = [ 'Cocktail Name', 'Cocktail ID'];

    const handleClick = (rowName: NavigableTableRow) => {
        return rowName;
    };
    
    const addFieldProps = {
        inputValue: '',
        onClick: () => void 0,
        maxLength: 100,
        placeholderText: 'Add new cocktail receipe'
    };
    
    const tableProps: NavigableTableProps = {
        handleClick: handleClick,
        tableHeaders: headers,
        tableRows: rows,
        maxHeight: 440,
        filterByColIndex: 0,
        headerElements: [
            <AddField {...addFieldProps} />,
            <Button variant='text' data-testid='TestButton'>
                Text
            </Button>
        ]
    };
    
    test('renders filter field', () => {
        render(<NavigableTable {...tableProps} />);

        const input = document.querySelector('input[name="FilterInputField"]') as HTMLInputElement;
        expect(input).toBeTruthy();

        input.value = 'Testing';
        expect(input.value).toBe('Testing');
        expect(input.type).toBe('text');
        expect(input.name).toBe('FilterInputField');
    });

    test('renders add field', () => {
        render(<NavigableTable {...tableProps} />);

        const input = document.querySelector('input[name="AddInputField"]') as HTMLInputElement;
        expect(input).toBeTruthy();

        input.value = 'Testing';
        expect(input.value).toBe('Testing');
        expect(input.type).toBe('text');
        expect(input.name).toBe('AddInputField');
    });

    test('renders header elements', () => {
        render(<NavigableTable {...tableProps} />);

        const headerElement = screen.getByTestId('TestButton');

        expect(headerElement).toBeTruthy();
    });

    test('renders table without header elements', () => {
        const tablePropsWithoutHeaderElements: NavigableTableProps = {
            handleClick: handleClick,
            tableHeaders: headers,
            tableRows: rows,
            maxHeight: 440,
            filterByColIndex: 0,
            headerElements: undefined
        };

        render(<NavigableTable {...tablePropsWithoutHeaderElements} />);

        const headerElement = screen.queryByTestId('TestButton');
        
        expect(headerElement).toBeFalsy();
    });

    test('renders table rows', () => {
        render(<NavigableTable {...tableProps} />);

        const tableRows = screen.queryAllByRole('row');
        expect(tableRows.length).toBe(12);

        const text = rows[9].tds[0]?.toLocaleString() ?? '';
        const row10 = screen.getByText(text);
        expect(row10.textContent).toBe(text);
    });

    test('filters table rows', () => {
        render(<NavigableTable {...tableProps} />);

        const input = screen.queryByPlaceholderText('Filter Table') as HTMLInputElement;
        fireEvent.change(input, { target: { value: 'gin' } });

        expect(input.name).toBe('FilterInputField');

        const tableRows = screen.queryAllByRole('row');
        expect(tableRows.length).toBe(3);
        expect(tableRows[1].children[0].textContent).toBe('Gin Sour');
        expect(tableRows[2].children[0].textContent).toBe('Gin Daisy');
    });

    test('clicks table row', () => {
        const mockHandleClick = vi.fn();

        const mockTableProps: NavigableTableProps = {
            handleClick: mockHandleClick,
            tableHeaders: headers,
            tableRows: rows,
            maxHeight: 440,
            filterByColIndex: 0
        };

        render(<NavigableTable {...mockTableProps} />);

        const firstRow = screen
            .getByText('Gin Sour')
            .closest('tr');

            firstRow?.click();

            expect(mockHandleClick).toHaveBeenCalledOnce();
    });
});