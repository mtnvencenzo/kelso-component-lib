import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import SectionBox from './SectionBox';

describe('Section Box', () => {
    test('renders correctly', async () => {
        render(
            <SectionBox width='100%' height='100%'>
                This section content
            </SectionBox>
        );

        const element = await screen.findByText('This section content');

        expect(element.innerHTML).toContain('This section content');
    });
});
