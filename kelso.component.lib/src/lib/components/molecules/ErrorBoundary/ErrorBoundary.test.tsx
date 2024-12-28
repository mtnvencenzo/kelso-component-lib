import { describe, expect, test } from "vitest";
import ErrorBoundary from "./ErrorBoundary";
import { render, screen } from '@testing-library/react';

const ProblemComponent = () => {
    throw new Error('Bad component');
}

describe('ErrorBoundary', () => {
    test('should render default error message', async () => {
        render(
            <ErrorBoundary>
                <ProblemComponent />
            </ErrorBoundary>
        );

        const element = await screen.findAllByText('An unknown error occurred.');
        expect(element[0].innerHTML).toContain('An unknown error occurred.');
    });

    test('should render fallback ui', async () => {
        render(
            <ErrorBoundary fallbackUi={<div><p>This is my fallback</p></div>}>
                <ProblemComponent />
            </ErrorBoundary>
        );

        const element = await screen.findAllByText('This is my fallback');
        expect(element[0].innerHTML).toContain('This is my fallback');
    });

    test('should render childen when no error', async () => {
        render(
            <ErrorBoundary>
                <p>No error here</p>
            </ErrorBoundary>
        );

        const element = await screen.findAllByText('No error here');
        expect(element[0].innerHTML).toContain('No error here');
    });
});

