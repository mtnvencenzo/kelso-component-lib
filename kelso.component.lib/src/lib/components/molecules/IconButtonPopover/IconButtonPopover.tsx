import { IconButton, Popover, PopoverVirtualElement, Typography } from '@mui/material';
import { ReactNode } from 'react';

interface IconButtonPopoverProps {
    id?: string;
    text: string;
    handleClick: React.MouseEventHandler<HTMLButtonElement>;
    onClose: (event: React.SyntheticEvent, reason: 'backdropClick' | 'escapeKeyDown') => void;
    icon: ReactNode;
    open: boolean;
    anchor: Element
        | (() => Element)
        | PopoverVirtualElement
        | (() => PopoverVirtualElement)
        | null;
}

const IconButtonPopover = ({
    text,
    handleClick,
    onClose,
    icon,
    open,
    anchor,
    id = 'icon-button-popover'
}: IconButtonPopoverProps) => {
    return (
        <>
            <IconButton
                color='primary'
                onClick={handleClick}
                sx={{ p: 0, marginLeft: 1 }}
                id={`${id}-btn`}
                data-testid='iconButton'>
                {icon}
            </IconButton>
            <Popover
                open={open}
                anchorEl={anchor}
                onClose={onClose}
                id={id}
                data-testid='popover'
                style={{
                    width: '80%'
                }}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left'
                }}>
                <Typography sx={{ p: 2 }} component='p'>
                    {text}
                </Typography>
            </Popover>
        </>
    );
};

export default IconButtonPopover;
export type { IconButtonPopoverProps };
