import { describe, test, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import RouterTab from './RouterTab';

describe('Router Tab', () => {
    test('renders tab element with text of tab test 1', async () => {
        const tabName = 'Tab Test 1';

        render(
            <MemoryRouter>
                <nav>
                    <RouterTab to={'/'} label={tabName} />
                </nav>
            </MemoryRouter>
        );

        const textOnPage = await screen.findByText(tabName);

        expect(textOnPage.innerHTML).toBe(tabName);
    });

    test('renders tab element with text of tab test 2', async () => {
        const tabName = 'Tab Test 2';

        render(
            <MemoryRouter>
                <nav>
                    <RouterTab to={'/test'} label={tabName} />
                </nav>
            </MemoryRouter>
        );

        const textOnPage = await screen.findByText(tabName);

        expect(textOnPage.innerHTML).toBe(tabName);
    });

    test("renders with active on path of '/'", async () => {
        const tabName = 'Tab Test 1';

        render(
            <MemoryRouter>
                <nav>
                    <RouterTab to={'/'} label={tabName} />
                </nav>
            </MemoryRouter>
        );

        const textOnPage = await screen.findByText(tabName);

        expect(textOnPage.className).toBe('active');
    });

    test("renders with active on path of '/test' which is not active", async () => {
        const tabName = 'Tab Test 1';

        render(
            <MemoryRouter>
                <nav>
                    <RouterTab to={'/test1'} label={tabName} />
                </nav>
            </MemoryRouter>
        );

        const textOnPage = await screen.findByText(tabName);

        expect(textOnPage.className).toBe('');
    });
});