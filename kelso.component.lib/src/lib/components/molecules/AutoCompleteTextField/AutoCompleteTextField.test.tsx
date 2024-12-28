import AutoCompleteTextField, { AutoCompleteTextFieldProps } from "./AutoCompleteTextField";
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';

describe('AutoCompleteTextField', () => {
    function onChange(text: string): string {
        return text;
    }

    const autoCompleteTextFieldProps: AutoCompleteTextFieldProps = {
        options: [
            { value: 'Pimms Cup', id: 'pimmsCup' },
            { value: 'New York Sour', id: 'newYorkSour' },
            { value: 'Rome With a View', id: 'romeWithAView' }
        ],
        placeHolderText: 'Cocktail Receipes',
        onChange: onChange,
        isRequired: true
    };

    test('renders auto complete text field', () => {
        render(<AutoCompleteTextField {...autoCompleteTextFieldProps} />);

        const input = document.querySelector('input[name="AutoCompleteTextField"]') as HTMLInputElement;
        expect(input).toBeTruthy();

        input.value = 'New York Sour';
        expect(input.value).toBe('New York Sour');

        expect(input.type).toBe('text');
        
        expect(input.name).toBe('AutoCompleteTextField');
    });

    test('renders options', () => {
        render(<AutoCompleteTextField {...autoCompleteTextFieldProps} />);

        const openButton = screen.getAllByTestId('ArrowDropDownIcon');
        fireEvent.click(openButton[0]);

        autoCompleteTextFieldProps.options.forEach((option) => {
            const optionElement = screen.getByText(option.value);
            expect(optionElement).toBeDefined();
        });
    });
});