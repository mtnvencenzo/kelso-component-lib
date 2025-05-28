import { JSX, useEffect, useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ArrowRight from '@mui/icons-material/ArrowRight';
import Settings from '@mui/icons-material/Settings';
import AddField from '../../molecules/AddField/AddField';
import FilterField from '../../molecules/FilterField/FilterField';

interface ButtonListDataProps {
    value: string,
    id: string,
    testId?: string
}

interface ButtonListProps {
    data: ButtonListDataProps[];
    maxWidth: string;
    listTitle: string;
    addInputValue: string;
    addItemOnClick: (value: string) => void;
    editItemOnClick: (value: string, id: string) => void;
    addFieldMaxLength: number;
    icon: JSX.Element | undefined | null;
    showAddField: boolean;
    listMaxHigh?: number;
    testId?: string;
}

const ButtonList = ({
    data,
    maxWidth,
    listTitle,
    addInputValue,
    addItemOnClick,
    editItemOnClick,
    addFieldMaxLength,
    icon,
    showAddField,
    listMaxHigh,
    testId = 'button-list'
}: ButtonListProps) => {
    const [defaultMaxHigh, setDefaultMaxHigh] = useState(10000);

    useEffect(() => {
        const copiedList = [...data];
        setListData(copiedList);
        if (listMaxHigh) {
            setDefaultMaxHigh(listMaxHigh);
        }
    }, [data]);

    const [listData, setListData] = useState<ButtonListDataProps[]>(data);

    const filterList = (filterVal: string) => {
        const filteredList = data.filter((val) => {
            return val.value.toLowerCase().includes(filterVal.toLowerCase());
        });
        setListData(filteredList);
    }

    return (
        <Paper
            data-testid={testId}
            elevation={4}
            sx={{ maxWidth, marginTop: '9px', paddingTop: 'unset' }}
        >
            <List>
                <ListItemButton>
                    <ListItemText
                        sx={{ marginTop: '-5px', marginBottom: '0px' }}
                        primary={listTitle}
                        primaryTypographyProps={{
                            fontSize: 20,
                            fontWeight: 'medium',
                            letterSpacing: 0,
                            fontFamily: 'Inter'
                        }}
                    />
                </ListItemButton>
                <Grid container spacing={3} marginLeft='-20px'>
                    <Grid size={{ xs: 3 }}>
                        <FilterField onFilter={filterList} />
                    </Grid>

                    {showAddField && (
                        <Grid size={{ xs: 3 }}>
                            <AddField
                                inputValue={addInputValue}
                                onClick={addItemOnClick}
                                placeholderText={'Add Item'}
                                maxLength={addFieldMaxLength}
                            />
                        </Grid>
                    )}
                </Grid>
                <Divider sx={{ marginTop: '9px' }} />
                <List
                    sx={{
                        width: '100%',
                        bgcolor: 'background.paper',
                        position: 'relative',
                        overflow: 'auto',
                        maxHeight: defaultMaxHigh,
                        '& ul': { padding: 0 },
                        paddingTop: '1px'
                    }}
                    data-testid='buttonListUl'>
                    {listData.map((v, index) => {
                        return (
                            <div key={`${index}_fragment`}>
                                <ListItem disablePadding key={`${index}_listItem`}>
                                    <ListItemButton key={`${index}_button`}>
                                        {icon && <ListItemIcon>{icon}</ListItemIcon>}
                                        <ListItemText primary={v.value} key={`${index}_text`} />
                                    </ListItemButton>
                                    <IconButton
                                        data-testid={`list-button-${index}`}
                                        size='large'
                                        sx={{
                                            '& svg': {
                                                transition: '0.2s',
                                                transform: 'translateX(0) rotate(0)'
                                            },
                                            '&:hover, &:focus': {
                                                bgcolor: 'unset',
                                                '& svg:first-of-type': {
                                                    transform: 'translateX(-4px) rotate(-20deg)'
                                                }
                                            },
                                            '&:after': {
                                                content: '""',
                                                position: 'absolute',
                                                height: '80%',
                                                display: 'block',
                                                left: 0,
                                                width: '1px',
                                                bgcolor: 'divider'
                                            }
                                        }}
                                        onClick={() => editItemOnClick(v.value, v.id)}>
                                            <Settings />
                                            <ArrowRight
                                                sx={{
                                                    position: 'absolute',
                                                    right: 4,
                                                    opacity: 0
                                                }}
                                            />
                                        </IconButton>
                                </ListItem>
                                <Divider key={`${index}_divider`} />
                            </div>
                        );
                    })}    
                    </List>
            </List>
        </Paper>
    );
};

export default ButtonList;
export type { ButtonListDataProps, ButtonListProps };

