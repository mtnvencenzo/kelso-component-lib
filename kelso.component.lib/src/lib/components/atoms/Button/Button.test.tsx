import { render, screen } from '@testing-library/react';
import Button from './Button';
import { describe, test, expect } from 'vitest';

describe('Button', () => {
    test('button should inclued label test', () => {
        const labelText = 'PUSH ME';

        render(
            <Button
                label={labelText}
                variant='primary'
                handleClick={() => alert('button pushed')}
                disabled={false} />
        );

        const actual = document.getElementById('primary-btn');

        expect(actual?.textContent).toBe(labelText);
    });

    test('button should included class of outlined', () => {
        render(
            <Button
                label='Button Label'
                variant='secondary'
                handleClick={() => alert('button pushed')}
                disabled={false} />
         );

        const actual = screen.getByText('Button Label');

        expect(actual?.className).toContain('outlined');
    });
});
