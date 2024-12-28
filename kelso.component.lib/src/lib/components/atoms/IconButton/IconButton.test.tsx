import { render, screen } from '@testing-library/react';
import IconButton from './IconButton';
import { describe, test, expect } from 'vitest';
import AddIcon from '@mui/icons-material/Add';

describe('Icon Button', () => {
    test('icon button is add type', () => {
        render(<IconButton icon={<AddIcon/>} handleClick={() => alert('added')} />);

        const actual = document.getElementById('icn-btn');

        expect(actual).toBeTruthy();
    });

    test('handles click function', () => {
        let counter = 0;
        render(<IconButton icon={<AddIcon/>} handleClick={() => counter++} />);

        const actual = screen.getByRole('button');
        actual.click();

        expect(counter).toBe(1);

        expect(actual).toBeTruthy();
    });

    test('has aria label', () => {
        render(
            <IconButton
                id='icon-button-add'
                icon={<AddIcon/>}
                handleClick={() => console.log('click')}
                ariaLabel='test-a-roo'
            />
        );

        const actual = document.getElementById('icon-button-add');
        expect(actual).toBeTruthy();
        expect(actual!.getAttribute('aria-label')).toBe('test-a-roo');
    });
});
