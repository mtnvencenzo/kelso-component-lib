import { useState } from 'react';
import  Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

interface Option {
    value: string;
    id: string;
}

interface AutoCompleteTextFieldProps {
    options: Option[];
    placeHolderText: string;
    onChange: (id: string) => void;
    isRequired?: boolean;
}

const AutoCompleteTextField = ({
    options,
    placeHolderText,
    onChange,
    isRequired = false
}: AutoCompleteTextFieldProps) => {
    const [value, setValue] = useState<Option | null>(null);
    const [inputValue, setInputValue] = useState('');

    return (
        <Autocomplete
            value={value}
            onChange={(_, newValue) => {
                setValue(newValue);
                if (newValue) {
                    onChange(newValue.id);
                } else {
                    onChange('');
                }
            }}
            inputValue={inputValue}
            onInputChange={(_, newInputValue) => setInputValue(newInputValue)}
            options={options}
            getOptionLabel={(option) => option.value}
            renderInput={(params) => (
                <TextField
                    name='AutoCompleteTextField'
                    {...params}
                    label={placeHolderText}
                    variant='standard'
                    size='small'
                    fullWidth
                    required={isRequired}
                />
            )}
            isOptionEqualToValue={(option, value) => option.id === value.id}
        />
    );
};

export default AutoCompleteTextField;
export type { AutoCompleteTextFieldProps };
