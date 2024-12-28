import { Component, ReactNode } from 'react';

interface ErrorBoundaryProps {
    children?: ReactNode;
    fallbackUi?: ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }
    
    // eslint-disable-next-line
    static getDerivedStateFromError(_: Error) {
        return { hasError: true };
    }

    public render() {
        if (this.state.hasError) {
            if (this.props.fallbackUi) {
                return this.props.fallbackUi;
            }

            return <>An unknown error occurred.</>
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
export type { ErrorBoundaryProps };
