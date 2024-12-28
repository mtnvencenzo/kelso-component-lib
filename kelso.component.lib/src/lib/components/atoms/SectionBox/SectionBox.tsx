import { Box as MuiBox, SxProps, Theme } from '@mui/material';
import { ReactNode } from 'react';

interface SectionBoxProps {
    width: string;
    height: string;
    children?: ReactNode;
    testId?: string;
}

const SectionBox = ({ width, height, children, testId }: SectionBoxProps) => {
    const containerBoxStyle: SxProps<Theme> = {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white',
        borderWidth: '2px',
        borderStyle: 'solid',
        borderColor: '#F2F4F7',
        borderBottomWidth: '1px',
        borderTopLeftRadius: '10px',
        borderTopRightRadius: '10px',
        borderBottomLeftRadius: '10px',
        borderBottomRightRadius: '10px',
        paddingX: '15px',
        paddingY: '10px',
        boxShadow: '1px 3px 3px -2px silver',
        marginTop: '15px',
        marginBottom: '10px',
        width,
        height
    }

    return (
        <MuiBox data-testid={testId} sx={containerBoxStyle}>
            {children}
        </MuiBox>
    );
};

export default SectionBox;
export type { SectionBoxProps };
