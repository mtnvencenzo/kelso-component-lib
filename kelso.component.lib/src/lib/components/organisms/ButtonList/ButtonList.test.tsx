import { fireEvent, render, screen } from '@testing-library/react'
import ButtonList from './ButtonList';
import { describe, expect, test } from 'vitest';
import GroupIcon from '@mui/icons-material/Group';

describe('Button List', () => {
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
        showAddField: true
    };

    test('renders filter field', () => {
        render(<ButtonList {...props} />);

        const input = document.querySelector('input[name="FilterInputField"]') as HTMLInputElement;

        expect(input).toBeTruthy();
        input.value = 'Testing';
        expect(input.value).toBe('Testing');
        expect(input.type).toBe('text');
        expect(input.name).toBe('FilterInputField');
    });

    test('renders add field', () => {
        render(<ButtonList {...props} />);

        const input = document.querySelector('input[name="AddInputField"]') as HTMLInputElement;

        expect(input).toBeTruthy();
        input.value = 'Testing';
        expect(input.value).toBe('Testing');
        expect(input.type).toBe('text');
        expect(input.name).toBe('AddInputField');
    });

    test('renders list title', () => {
        render(<ButtonList {...props} />);

        const listTitle = screen.getByText(props.listTitle);

        expect(listTitle.textContent).toBeTruthy();
    });

    test('renders list items', () => {
        render(<ButtonList {...props} />);

        const listItems = screen.queryAllByRole('listitem');

        expect(listItems.length).toBe(props.data.length);
    });

    test('shows list items data', () => {
        render(<ButtonList {...props} />);

        let item = screen.queryAllByText('Item 1');
        expect(item.length).toBe(1);
        expect(item[0].textContent).toBe('Item 1');

        item = screen.queryAllByText('Item 2');
        expect(item.length).toBe(1);
        expect(item[0].textContent).toBe('Item 2');

        item = screen.queryAllByText('Item 3');
        expect(item.length).toBe(1);
        expect(item[0].textContent).toBe('Item 3');

        item = screen.queryAllByText('Item 4');
        expect(item.length).toBe(1);
        expect(item[0].textContent).toBe('Item 4');
    });

    test('renders icons', () => {
        render(<ButtonList {...props} />);

        let icon = screen.findByTestId('GroupIcon');
        expect(icon).toBeTruthy();

        icon = screen.findByTestId('SettingsIcon');
        expect(icon).toBeTruthy();

        icon = screen.findByTestId('ArrowRightIcon');
        expect(icon).toBeTruthy();
    });

    test('filters list items', () => {
        render(<ButtonList {...props} />);

        const input = document.querySelector('input') as HTMLInputElement;
        fireEvent.change(input, { target: { value: 'Item 1'} });

        const listItems = screen.queryAllByRole('listitem');
        expect(listItems.length).toBe(1);
        expect(listItems[0].textContent).toBe('Item 1');
    });

    test('filters list items ignoring case', () => {
        render(<ButtonList {...props} />);

        const input = document.querySelector('input') as HTMLInputElement;
        fireEvent.change(input, { target: { value: 'ITEM 1'} });

        const listItems = screen.queryAllByRole('listitem');
        expect(listItems.length).toBe(1);
        expect(listItems[0].textContent).toBe('Item 1');
    });

    test('uses default max high when value is not set', () => {
        const scrollableProps = {
            data: data,
            maxWidth: '100%',
            listTitle: 'List Title',
            addInputValue: '',
            addItemOnClick: addItem,
            editItemOnClick: editItem,
            addFieldMaxLength: 100,
            icon: <GroupIcon />,
            showAddField: true
        };
        render(<ButtonList {...scrollableProps} />);

        const element = screen.getByTestId('buttonListUl');
        const computedStyle = getComputedStyle(element);
        expect(computedStyle.maxHeight).toBe('10000px');
    });

    test('displays scrollable list', () => {
        const scrollableProps = {
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
        render(<ButtonList {...scrollableProps} />);

        const element = screen.getByTestId('buttonListUl');
        const computedStyle = getComputedStyle(element);
        expect(computedStyle.maxHeight).toBe('100px');
        expect(computedStyle.overflow).toBe('auto');
    });
});