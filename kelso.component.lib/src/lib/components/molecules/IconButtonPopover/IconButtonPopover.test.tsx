import React, { useState } from "react";
import { describe, test, expect } from 'vitest';
import { render, screen, fireEvent } from "@testing-library/react";

import IconButtonPopover from "./";
import MoreHorizonIcon from '@mui/icons-material/MoreHoriz';
import { Grid, Typography } from '@mui/material';

const PopoverWrapper: React.FC = () => {
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
    }

    return (
        <Grid>
            <Grid container rowSpacing={1}>
                <Grid item xs={12}>
                    <Typography variant='body1' color='textPrimary' display='inline'>
                        {'TINS'}:{' '}
                    </Typography>
                    <br />
                    <Typography variant='body1' color='textSecondary' display='inline'>
                        {shortVal}
                    </Typography>
                    <IconButtonPopover
                        anchor={anchorElement}
                        handleClick={handleClick}
                        icon={<MoreHorizonIcon />}
                        onClose={handleClose}
                        open={open}
                        text={longsVal}
                    />
                </Grid>
            </Grid>
        </Grid>
    );
};

describe('Icon Button Popover', () => {
    test('renders button', () => {
        render(<PopoverWrapper />);

        const actual = screen.getByTestId('iconButton');

        expect(actual).toBeTruthy();
    });

    test('renders popover on click', () => {
        render(<PopoverWrapper />);

        const btn = screen.getByTestId('iconButton');
        fireEvent.click(btn);

        const actual = document.getElementById('icon-button-popover');

        expect(actual).toBeTruthy();
    });
});
