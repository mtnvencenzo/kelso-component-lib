import { ThemeOptions, ThemeProvider } from '@mui/material/styles';
import MuiButton from '@mui/material/Button';
import libraryTheme from '../../libraryTheme';

interface ButtonProps {
    label: string,
    disabled?: boolean;
    handleClick: () => void;
    size?: 'small' | 'medium' | 'large';
    variant?: 'primary' | 'secondary';
    buttonType?: 'submit' | 'reset' | 'button';
    id?: string | null;
    theme?: Partial<ThemeOptions>;
}

const Button = ({
    id,
    label,
    handleClick,
    disabled = false,
    variant = 'primary',
    buttonType = 'button',
    size = 'medium',
    theme = libraryTheme
}: ButtonProps) => {
    const buttonId = id ?? `${variant}-btn`;

    return (
        <ThemeProvider theme={theme}>
            <MuiButton
                variant={variant == 'primary' ? 'contained' : 'outlined'}
                disabled={disabled}
                onClick={handleClick}
                type={buttonType}
                size={size}
                id={buttonId}>
                {label}
            </MuiButton>
        </ThemeProvider>
    );
};

export default Button;
export type { ButtonProps };