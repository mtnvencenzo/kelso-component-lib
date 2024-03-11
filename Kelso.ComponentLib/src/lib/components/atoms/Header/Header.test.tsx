import { describe, expect, test } from 'vitest';
import { screen, render } from '@testing-library/react';
import Header from './Header';
import genericLogo1 from '../../../assets/generic-logo-1.png';
import genericLogo2 from './generic-logo-2.png';

const appTitle = 'My App Title';

describe('Header', () => {
    test('renders header element app title', async () => {
        render(<Header appTitle={appTitle} />);

        const textOnPage = await screen.findByText(appTitle);
        expect(textOnPage).toBeDefined();
    });

    test('renders default generic logo', async () => {
        render(<Header appTitle={appTitle} />);

        const textOnPage = await screen.findByText(appTitle);
        expect(textOnPage).toBeDefined();

        const img = screen.getByAltText('Logo');
        expect(img).toBeDefined();
        expect(img.getAttribute('src')).toBe(genericLogo1);
    });

    test('renders custom logo', async () => {
        render(<Header appTitle={appTitle} logo={genericLogo2} />);

        const textOnPage = await screen.findByText(appTitle);
        expect(textOnPage).toBeDefined();

        const img = screen.getByAltText('Logo');
        expect(img).toBeDefined();
        expect(img.getAttribute('src')).toBe(genericLogo2);
    });
});