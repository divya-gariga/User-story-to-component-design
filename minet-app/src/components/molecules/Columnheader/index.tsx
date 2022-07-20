import React from 'react';
import Table from '@mui/material/Table';
import { TableHead, TableRow, TableCell } from '@mui/material';

const ColumnHeader = () => {
    return (
        <div>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Price</TableCell>
                        <TableCell>Change</TableCell>
                        <TableCell>Market Cap</TableCell>
                        <TableCell>Watch</TableCell>
                    </TableRow>
                </TableHead>
            </Table>
        </div>
    );
};

export default ColumnHeader;