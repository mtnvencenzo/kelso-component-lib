import { Alert } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react';
import ErrorBoundary from 'src/lib/components/molecules/ErrorBoundary/ErrorBoundary';

const ProblemComponent = () => {
    throw new Error('Bad component');
}

const meta: Meta<typeof ErrorBoundary> = {
    title: 'Components/Molecules/ErrorBoundary',
    component: ErrorBoundary,
    tags: ['autodocs'],
    argTypes: {
        children: {
            description: 'Any valid JSX.',
            disable: true,
            control: false
        },
        fallbackUi: {
            description: 'A custom error message, or custom UI components.',
            disable: true,
            control: false
        }
    }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    name: 'Boundry With Default Error Text',
    args: {
        children: <ProblemComponent />,
        fallbackUi: undefined
    }
}

export const CustomErrorText: Story = {
    name: 'Boundry With Custom Error Text',
    args: {
        children: <ProblemComponent />,
        fallbackUi: 'Something broke. 😒 (custom error text example.)'
    }
}

export const CustomErrorComponent: Story = {
    name: 'Boundry With Custom Component',
    args: {
        children: <ProblemComponent />,
        fallbackUi: <Alert severity='error'>This is a custom error component.</Alert>
    }
}
