import { Component, ReactNode } from 'react';

interface ErrorBoundryProps {
    children?: ReactNode;
    fallbackUi?: ReactNode;
}

export interface ErrorBoundryState {
    hasError: boolean;
}

class ErrorBoundry extends Component<ErrorBoundryProps, ErrorBoundryState> {
    constructor(props: ErrorBoundryProps) {
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

export default ErrorBoundry;
