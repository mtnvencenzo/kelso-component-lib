import { createTheme, ThemeOptions } from '@mui/material/styles';

const themeDetails: Partial<ThemeOptions> = {
    palette: {
        primary: {
            main: '#0153FF',
            contrastText: 'white'
        }
    },
    typography: {
        fontFamily: 'Inter'
    },
    components: {
        MuiButton: {
            styleOverrides: {
                containedPrimary: {
                    '&.Mui-disabled': {
                        background: '#C1DAEE',
                        color: 'white'
                    }
                },
                root: {
                    '&.Mui-disabled': {
                        background: '#C1DAEE',
                        border: '1px solid #C1DAEE'
                    }
                }
            }
        },
        MuiInputBase: {
            styleOverrides: {
                input: {
                    fontFamily: 'Inter'
                }
            }
        }
    }
};

const libraryTheme = createTheme(themeDetails);

export default libraryTheme;
