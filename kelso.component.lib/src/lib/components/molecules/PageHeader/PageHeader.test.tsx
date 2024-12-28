import { render, screen } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';
import PageHeader from './PageHeader';

vi.mock('react-router-dom', () => ({
    useLocation: vi.fn().mockImplementation(() => ({
        pathname: '/'
    })),
    useNavigate: vi.fn().mockImplementation(() => undefined)
}));

describe('Page Header', () => {
    test('renders and can find tab', async () => {
        render(<PageHeader tabList={[{
            to: '',
            testId: 'page-header-overview',
            label: 'Overview',
            id: 'page-header-overview',
            visible: true
        }]} showSearch={false} showAlert={false} pageTitle={'Test Page Header'} />);

        const element = await screen.findByText('Overview');

        expect(element).not.toBeNull();
    });

    
    test('renders and tab menu button can be found by id', async () => {
        render(<PageHeader tabList={[{
            to: '',
            testId: 'page-header-overview',
            label: 'Overview',
            id: 'page-header-overview',
            visible: true
        }]} showSearch={false} showAlert={false} pageTitle={'Test Page Header'} />);

        const element = await screen.findByTestId('page-header-overview');

        expect(element).not.toBeNull();
    });
});
