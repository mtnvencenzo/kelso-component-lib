import { ReactNode, useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Grid from '@mui/material/Grid';
import FilterField from '../../molecules/FilterField/FilterField';

interface NavigableTableRow {
    tds: ReactNode[];
    id: string
}

interface NavigableTableProps {
    tableHeaders: string[];
    headerElements?: ReactNode[];
    tableRows: NavigableTableRow[];
    maxHeight: number;
    filterByColIndex: number;
    handleClick: (value: NavigableTableRow, id: string) => void;
    testId?: string;
}

const NavigableTable = ({
    tableHeaders,
    tableRows,
    maxHeight,
    filterByColIndex,
    handleClick,
    headerElements = [],
    testId = 'navigable-table'
}: NavigableTableProps) => {
        const [rows, setRows] = useState<NavigableTableRow[]>(tableRows);
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

        return (
            <Paper
                data-testid={testId}
                elevation={4}
                sx={{ maxWidth: '100%', marginTop: '9px', paddingTop: 'unset' }} >
                <Grid container spacing={1} paddingX='0'>
                    <Grid
                        size={{ xs: 12 }}
                        sx={{ paddingRight: '32px' }}>
                        <Grid
                            container
                            spacing={3}
                            direction='row'
                            justifyContent='flex-end'
                            alignItems='center'>
                            {headerElements?.map((element, index) => (
                                <Grid
                                    size={{ xs: 'auto' }}
                                    sx={{ marginLeft: '8px', marginRight: '-8px' }}
                                    key={index}>
                                    {element}
                                </Grid>
                            ))}
                            <Grid size={{ xs: 4 }} sx={{ paddingRight: '16px' }}>
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
                                        <TableRow hover key={rowIndex} className='hover' sx={{ cursor: 'pointer'}} onClick={() => handleClick(row, row.id)}>
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

    export default NavigableTable;
    export type { NavigableTableRow, NavigableTableProps };
