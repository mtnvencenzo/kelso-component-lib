import { IconButton as MuiIconButton, SxProps, Theme } from '@mui/material';

interface IconButtonProps {
    handleClick?: () => void;
    icon: JSX.Element | undefined | null;
    ariaLabel?: string;
    id?: string;
    disabled?: boolean;
    sx?: SxProps<Theme> | null;
}

const IconButton = ({
    handleClick,
    icon,
    ariaLabel,
    id,
    disabled = false,
    sx = null
}: IconButtonProps) => {
    const iconButtonId = id ?? `icn-btn`;

    return (
        <MuiIconButton
            onClick={handleClick}
            id={iconButtonId}
            aria-label={ariaLabel}
            disabled={disabled}
            sx={sx}>
            {icon}
        </MuiIconButton>
    );
};

export default IconButton;
export type { IconButtonProps };