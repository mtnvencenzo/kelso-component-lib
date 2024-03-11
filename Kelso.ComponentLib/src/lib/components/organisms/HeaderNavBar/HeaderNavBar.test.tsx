import { describe, test, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import HeaderNavBar from './HeaderNavBar';
import { RouterTabPanelProps } from '../../molecules/RouterTabPanel/RouterTabPanel';
import { render, screen } from '@testing-library/react';
import genericLogo1 from '../../../assets/generic-logo-1.png';
import genericLogo2 from './generic-logo-2.png';

const appTitle = 'Specialized Cocktails';
const tabPanel: RouterTabPanelProps = {
    tabsList: [
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
    ]
};

describe('Header Nav Bar', () => {
    test('renders header element app title', async () => {
        render (
            <MemoryRouter>
                <HeaderNavBar appTitle={appTitle} tabInfo={tabPanel} />
            </MemoryRouter>
        )

        const textOnPage = await screen.findByText(appTitle);

        expect(textOnPage).toBeDefined();
    });

    test('renders header nav bar tab home element with text', async () => {
        render (
            <MemoryRouter>
                <HeaderNavBar appTitle={appTitle} tabInfo={tabPanel} />
            </MemoryRouter>
        )

        const textOnPage = await screen.findByText('Home');

        expect(textOnPage).toBeDefined();
    });

    test('renders header nav bar tab 2 element with text', async () => {
        render (
            <MemoryRouter>
                <HeaderNavBar appTitle={appTitle} tabInfo={tabPanel} />
            </MemoryRouter>
        )

        const textOnPage = await screen.findByText('Tab 2');

        expect(textOnPage).toBeDefined();
    });

    test('renders header nav bar tab 3 element with text', async () => {
        render (
            <MemoryRouter>
                <HeaderNavBar appTitle={appTitle} tabInfo={tabPanel} />
            </MemoryRouter>
        )

        const textOnPage = await screen.findByText('Tab 3');

        expect(textOnPage).toBeDefined();
    });

    test('renders default logo', () => {
        render (
            <MemoryRouter>
                <HeaderNavBar appTitle={appTitle} tabInfo={tabPanel} />
            </MemoryRouter>
        )

        const img = screen.getByAltText('Logo');
        expect(img).toBeDefined();
        expect(img.getAttribute('src')).toBe(genericLogo1);
    });

    test('renders custom logo', () => {
        render (
            <MemoryRouter>
                <HeaderNavBar appTitle={appTitle} tabInfo={tabPanel} logo={genericLogo2} />
            </MemoryRouter>
        )

        const img = screen.getByAltText('Logo');
        expect(img).toBeDefined();
        expect(img.getAttribute('src')).toBe(genericLogo2);
    });
});