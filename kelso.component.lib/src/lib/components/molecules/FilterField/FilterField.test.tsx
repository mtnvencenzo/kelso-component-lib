import FilterField, { FilterFieldProps } from './FilterField';
import { describe, test, expect } from 'vitest';
import { render, fireEvent } from '@testing-library/react';

describe('FilterField', () => {
    function onFilter(text: string): string {
        return text;
    }

    const filterProps: FilterFieldProps = {
        onFilter: onFilter
    };

    test('renders add field', () => {
        render(<FilterField {...filterProps} />);

        const input = document.querySelector('input[name="FilterInputField"]') as HTMLInputElement;

        expect(input).toBeTruthy();

        input.value = 'Testing';
        expect(input.value).toBe('Testing')

        expect(input.type).toBe('text');

        expect(input.name).toBe('FilterInputField');
    });

    test('handles input change', () => {
        render(<FilterField {...filterProps} />);
        
        const input = document.querySelector('input[name="FilterInputField"]') as HTMLInputElement;

        fireEvent.change(input, { target: { value: 'New value' } });

        expect(input.value).toBe('New value');
    });
});
