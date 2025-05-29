import type { Meta, StoryObj } from '@storybook/react';
import IconButtonPopover from 'src/lib/components/molecules/IconButtonPopover/IconButtonPopover';

import MoreHorizonIcon from '@mui/icons-material/MoreHoriz';
import { Grid, Typography } from '@mui/material';
import { useState } from 'react';

const Wrapper: React.FC = () => {
    const shortVal = '0000000001, 0000000002, 0000000003, 0000000004';
    const longsVal = '0000000001, 0000000002, 0000000003, 0000000004, 0000000005, 0000000006';

    const [anchorElement, setAnchorElement] = useState<HTMLButtonElement | null>(null);
    const [open, setOpen] = useState<boolean>(false);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorElement(e.currentTarget);
        setOpen(true);
    };

    const handleClose = () => {
        setAnchorElement(null);
        setOpen(false);
    };

    return (
        <Grid>
            <Grid container rowSpacing={1}>
                <Grid size={{ xs: 12 }}>
                    <Typography variant='body1' color='textPrimary' display='inline'>
                        {'TINS'}:{' '}
                    </Typography>
                    <br />
                    <Typography variant='body1' color='textSecondary' display='inline'>
                        {shortVal}
                    </Typography>
                    <IconButtonPopover anchor={anchorElement} handleClick={handleClick} icon={<MoreHorizonIcon />} onClose={handleClose} open={open} text={longsVal} />
                </Grid>
            </Grid>
        </Grid>
    );
};

const meta: Meta<typeof Wrapper> = {
    title: 'Components/Molecules/IconButtonPopover',
    component: Wrapper,
    tags: ['autodocs'],
    argTypes: {}
};

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * Example of using the icon button popover with a wrapper including a grid element.
 * @returns a wrapper around an icon button to display how it could work
 */
export const WrappedExample: Story = {};
