import { describe, test, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import RouterTabPanel from './RouterTabPanel';
import { RouterTabProps } from '../..';

describe('Router Tab Panel', () => {
    const tabsList: RouterTabProps[] = [
        {
            to: '/',
            label: 'Home'
        },
        {
            to: '/tab2',
            label: 'Tab 2'
        },
        {
            to: '/tab3',
            label: 'Tab 3'
        }
    ];

    test('renders tab element with text home', async () => {
        const tabName = 'Home';

        render(
            <MemoryRouter>
                <RouterTabPanel tabsList={tabsList} />
            </MemoryRouter>
        );

        const textOnPage = await screen.findByText(tabName);

        expect(textOnPage.innerHTML).toBe(tabName);
    });

    test('renders tab element with text tab2', async () => {
        const tabName = 'Tab 2';

        render(
            <MemoryRouter>
                <RouterTabPanel tabsList={tabsList} />
            </MemoryRouter>
        );

        const textOnPage = await screen.findByText(tabName);

        expect(textOnPage.innerHTML).toBe(tabName);
    });

    test('renders with default class of horizontal as default', () => {
        render(
            <MemoryRouter>
                <RouterTabPanel tabsList={tabsList} />
            </MemoryRouter>
        );

        const textOnPage = document.getElementsByClassName('nav-horizontal');

        expect(textOnPage[0].className).toBe('nav-horizontal');
    });

    test('renders with class of nav-header with variant of header', () => {
        render(
            <MemoryRouter>
                <RouterTabPanel tabsList={tabsList} variant='header' />
            </MemoryRouter>
        );

        const textOnPage = document.getElementsByClassName('nav-header');

        expect(textOnPage[0].className).toBe('nav-header');
    });
});