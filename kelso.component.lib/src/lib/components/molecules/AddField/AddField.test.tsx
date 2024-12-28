import AddField, { AddFieldProps } from './AddField';
import { describe, test, expect } from 'vitest';
import { render, fireEvent, screen } from '@testing-library/react';

describe('AddField', () => {
    function onClick(text: string): string {
        return text;
    }

    const addProps: AddFieldProps = {
        inputValue: '',
        onClick: onClick,
        maxLength: 101,
        placeholderText: 'Add new drink receipe'
    };

    test('renders add field', () => {
        render(<AddField {...addProps} />);

        const input = document.querySelector('input[name="AddInputField"]') as HTMLInputElement;

        expect(input).toBeTruthy();

        input.value = 'Testing';
        expect(input.value).toBe('Testing')

        expect(input.type).toBe('text');

        expect(input.name).toBe('AddInputField');
    });

    test('handles input change', () => {
        render(<AddField {...addProps} />);
        
        const input = document.querySelector('input[name="AddInputField"]') as HTMLInputElement;

        fireEvent.change(input, { target: { value: 'New value' } });

        expect(input.value).toBe('New value');
    });

    test('displays character count correctly', () => {
        render(<AddField {...addProps} />);
        
        const input = document.querySelector('input[name="AddInputField"]') as HTMLInputElement;
        
        fireEvent.change(input, { target: { value: 'Newer value' } });

        const charCount = screen.getByText('11/101');
        expect(charCount).toBeDefined();
    });
});
