import { Button, SxProps, Theme } from '@mui/material';
import { useCallback } from 'react';
import { To, useLocation, useNavigate } from 'react-router-dom';

interface NavButtonProps {
    id: string;
    to: To;
    label: string;
    testId: string;
    visible: boolean;
}

const menuButtonStyle: SxProps<Theme> = {
    color: '#101828',
    fontSize: '16px',
    textTransform: 'capitalize',
    fontWeight: 'bold',
    '&:hover': {
        backgroundColor: '#EAECF0',
        boxShadow: 'none'
    }
};

const NavButton = ({ id, to, label, testId, visible }: NavButtonProps) => {
    const { pathname } = useLocation();
    const navigate = useNavigate();

    const handleClick = useCallback(async () => {
        await navigate(to);
    }, [navigate, to]);

    if (!visible) {
        return null;
    }

    return (
        <Button
            id={id}
            key={id}
            onClick={handleClick}
            data-testid={testId}
            hidden={!visible}
            aria-label={label}
            sx={
                to === pathname ? { ...menuButtonStyle, backgroundColor: '#EAECF0' } : menuButtonStyle
            }
        >
            {label}
        </Button>
    );
};

export default NavButton;
export type { NavButtonProps };
