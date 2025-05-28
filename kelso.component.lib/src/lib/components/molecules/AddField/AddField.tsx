import * as React from 'react';
import { useState } from 'react';
import { Typography, InputBase, Grid } from '@mui/material';
import { ThemeOptions, ThemeProvider } from '@mui/material/styles';
import IconButton from '../../atoms/IconButton';
import AddIcon from '@mui/icons-material/Add';
import FieldContainer from '../../atoms/FieldContainer';
import libraryTheme from '../../libraryTheme';
import './AddField.css';


interface AddFieldProps {
    inputValue: string;
    onClick: (value: string) => void;
    placeholderText: string;
    maxLength: number;
    testId?: string;
    theme?: Partial<ThemeOptions>;
}

const AddField = ({
    inputValue,
    onClick,
    placeholderText,
    maxLength,
    testId = 'add-field',
    theme = libraryTheme
}: AddFieldProps) => {
    const [localInputValue, setLocalInputValue] = useState(inputValue);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLocalInputValue(e.target.value);
    };

    const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && localInputValue.trim()) {
            handleAddClick();
            e.preventDefault();
        }
    };

    const handleAddClick = () => {
        if (!localInputValue.trim()) {
            return;
        }
        onClick(localInputValue.trim());
        setLocalInputValue('');
    };

    return (
        <ThemeProvider theme={theme}>
            <FieldContainer variant='outline'>
                <div id='fieldContainer'>
                    <InputBase
                        name='AddInputField'
                        type='textSecondary'
                        value={localInputValue}
                        inputProps={{ maxLength }}
                        onChange={handleInputChange}
                        onKeyDown={handleInputKeyDown}
                        placeholder={placeholderText}
                        data-testid={testId}
                        fullWidth
                        sx={{ ml: 1, flex: 1 }}
                        endAdornment={
                            <Grid
                                container
                                maxWidth='5%'
                                direction='row'
                                justifyContent='flex-end'
                                alignItems='center'>
                                <Grid size={{ xs: 1 }}>
                                    <Typography
                                        variant='caption'
                                        color='textSecondary'
                                        sx={{
                                            position: 'absolute',
                                            bottom: 7,
                                            right: 37
                                        }}>
                                        {`${localInputValue?.length ?? 0}/${maxLength}`}
                                    </Typography>
                                </Grid>
                                <Grid size={{ xs: 1 }}>
                                    <IconButton
                                        handleClick={handleAddClick}
                                        icon={<AddIcon />}
                                        sx={{
                                            position: 'absolute',
                                            top: -5,
                                            right: 0
                                        }}
                                    />
                                </Grid>
                            </Grid>
                        }
                    />
                </div>
            </FieldContainer>
        </ThemeProvider>
    );
};

export default AddField;
export type { AddFieldProps };
