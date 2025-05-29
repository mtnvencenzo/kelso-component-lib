import { ReactNode, useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Box, Typography } from '@mui/material';
import AddField, { AddFieldProps } from '../../molecules/AddField/AddField';
import Grid from '@mui/material/Grid';
import FilterField from '../../molecules/FilterField/FilterField';

interface FilterableTableRow {
    tds: ReactNode[];
}

interface FilterableTableProps {
    tableTitle?: ReactNode;
    tableHeaders: ReactNode[];
    tableRows: FilterableTableRow[];
    maxHeight: number;
    filterByColIndex: number;
    showAdd: boolean;
    addFieldProps?: AddFieldProps;
    testId?: string;
    headerElements?: ReactNode;
}

const FilterableTable = ({
    tableTitle = '',
    tableHeaders,
    tableRows,
    maxHeight,
    filterByColIndex,
    addFieldProps,
    showAdd,
    headerElements = '',
    testId = 'filterable-table'
}: FilterableTableProps) => {
        const [rows, setRows] = useState<FilterableTableRow[]>(tableRows);
        const [filtered, setFiltered] = useState<boolean>(false);
        const [searchValue, setSearchValue] = useState<string>('');
        
        useEffect(() => {
            setRows(tableRows);
            if (filtered) {
                filterRows(searchValue);
            } 
        }, [tableRows, filtered]);

        const filterRows = (searchedVal: string) => {
            const filteredRows = tableRows.filter((row) => {
                const columnValue = (row?.tds[filterByColIndex]?.toLocaleString() ?? '').toLowerCase();
                return columnValue.includes(searchedVal.toLowerCase());
            });

            setFiltered(searchedVal !== undefined && searchedVal.length > 0);
            setSearchValue(searchedVal.toLowerCase());
            setRows(filteredRows);
        };

        const displayTitle = typeof tableTitle === 'string' ? (
            <Typography variant='h6' component='span'>
                {tableTitle}
            </Typography>
        ) : ( tableTitle );

        return (
            <Paper
                data-testid={testId}
                elevation={4}
                sx={{ maxWidth: '100%', marginTop: '9px', paddingTop: 'unset' }} >
                <Grid container spacing={1}>
                    <Grid
                        size={{ xs:
                            !showAdd && !headerElements
                                ? 9
                                : !showAdd || !headerElements
                                    ? 6
                                    : 3
                        }}>
                        {tableTitle && (
                            <Grid
                                container
                                direction='row'
                                justifyContent='flex-end'
                                alignItems='center'>
                                <Grid
                                    size={{ xs: 12 }}
                                    sx={{ paddingLeft: '16px', paddingTop: '5px' }}>
                                    <Typography>{displayTitle}</Typography>
                                </Grid>
                            </Grid>
                        )}
                    </Grid>

                    <Grid
                        size={{ xs:
                            !showAdd && !headerElements
                                ? 3
                                : !showAdd || !headerElements
                                    ? 6
                                    : 9
                        }}>
                        <Grid
                            container
                            direction='row'
                            justifyContent='flex-end'
                            alignItems='center'>
                            {headerElements && (
                                <Grid size={{ xs: !showAdd ? 6 : 4 }} sx={{ paddingRight: '16px' }}>
                                    <Box display='flex' justifyContent='flex-end' width='100%'>
                                        {headerElements}
                                    </Box>
                                </Grid>
                            )}

                            {showAdd && addFieldProps && (
                                <Grid
                                    size={{ xs: !headerElements ? 6 : 4 }}
                                    sx={{ paddingRight: '16px' }}>
                                    <AddField {...addFieldProps} />
                                </Grid>
                            )}

                            <Grid
                                size={{ xs:
                                    !showAdd && !headerElements
                                        ? 12
                                        : !showAdd || !headerElements
                                            ? 6
                                            : 4
                                }}
                                sx={{ paddingRight: '16px' }}>
                                <FilterField onFilter={filterRows} />
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid size={{ xs: 12 }}>
                        <TableContainer sx={{ maxHeight: maxHeight }}>
                            <Table stickyHeader>
                                <TableHead>
                                    <TableRow key='headerRowKey'>
                                        {tableHeaders.map((header, index) => (
                                            <TableCell
                                                role='columnHeader'
                                                align='left'
                                                key={index}
                                                style={{ backgroundColor: '#F4F4F4' }}>
                                                {header}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row, rowIndex) => (
                                        <TableRow hover key={rowIndex} className='hover'>
                                            {row.tds.map((td, cellIndex) => (
                                                <TableCell align='left' key={cellIndex}>
                                                    {td}
                                                </TableCell>
                                            ))}
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                </Grid>
            </Paper>
        );
    };

    export default FilterableTable;
    export type { FilterableTableRow, FilterableTableProps };
