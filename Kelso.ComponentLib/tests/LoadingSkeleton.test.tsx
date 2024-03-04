import { describe, test, expect } from 'vitest';
import { render } from '@testing-library/react';
import { LoadingSkeleton } from '../src/lib/components/atoms/LoadingSkeleton';

describe('Loading Skeleton', () => {
    test('renders loading skeleton with no props and default rows', () => {
        render(<LoadingSkeleton />);

        const actual = document.getElementById('loading-skeleton');
        expect(actual).toBeTruthy();
        expect(actual!.children.length).toBe(1);

        const firstChild = actual!.firstElementChild;
        expect(firstChild).toBeTruthy();

        const row1 = firstChild?.children[0];
        expect(row1).toBeTruthy();
        expect(row1!.id).toBe('loading-skeleton-row-0');

        const row2 = firstChild?.children[1];
        expect(row2).toBeTruthy();
        expect(row2!.id).toBe('loading-skeleton-row-1');

        const row3 = firstChild?.children[2];
        expect(row3).toBeTruthy();
        expect(row3!.id).toBe('loading-skeleton-row-2');

        const row4 = firstChild?.children[3];
        expect(row4).toBeTruthy();
        expect(row4!.id).toBe('loading-skeleton-row-3');
    });
});
