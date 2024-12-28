import { useState } from 'react';
import { IconButton, InputAdornment, InputBase } from '@mui/material';
import { ThemeOptions, ThemeProvider } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import FieldContainer from '../../atoms/FieldContainer';
import libraryTheme from '../../libraryTheme';

interface FilterFieldProps {
    onFilter: (filterValue: string) => void;
    testId?: string;
    theme?: Partial<ThemeOptions>;
}

const FilterField = ({
    onFilter,
    testId = 'table-filter',
    theme = libraryTheme
}: FilterFieldProps) => {
    const [filterValue, setFilterValue] = useState<string>('');

    const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { target: { value: newValue }} = e;
        setFilterValue(newValue);
        onFilter(newValue);
    };

    return (
        <ThemeProvider theme={theme}>
            <FieldContainer variant='outline'>
                <InputBase
                    name='FilterInputField'
                    sx={{ ml: 1, flex: 1 }}
                    fullWidth
                    placeholder='Filter Table'
                    inputProps={{ 'aria-label': 'filter table' }}
                    onChange={handleFilterChange}
                    value={filterValue}
                    data-testid={testId}
                    endAdornment={
                        <InputAdornment position='end'>
                            <IconButton>
                                <SearchIcon />
                            </IconButton>
                        </InputAdornment>
                    }
                />
            </FieldContainer>
        </ThemeProvider>
    );
};

export default FilterField;
export type { FilterFieldProps };
