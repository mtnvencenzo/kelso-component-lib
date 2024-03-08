import { render, screen } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';
import NavButton from './NavButton';

vi.mock('react-router-dom', () => ({
    useLocation: vi.fn().mockImplementation(() => ({
        pathname: '/'
    })),
    useNavigate: vi.fn().mockImplementation(() => undefined)
}));

describe('Nav Button', () => {
    test('renders and can be found by label', async () => {
        render(
            <NavButton
                id='buttonId'
                to='/'
                label='Overview'
                testId='test'
                visible
            />
        );

        const element = await screen.findByText('Overview');

        expect(element).not.toBeNull();
    });

    test('renders and can be found by testid', async () => {
        render(
            <NavButton
                id='buttonId'
                to='/'
                label='Overview'
                testId='test'
                visible
            />
        );

        const element = await screen.findByTestId('test');

        expect(element).not.toBeNull();
    });
});