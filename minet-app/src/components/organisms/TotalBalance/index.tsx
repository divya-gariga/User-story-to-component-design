import { Typography } from '@mui/material';
import React from 'react';

const TotalBalance=(props:{userId:number,currencyId:number})=> {
    return (
        <div>
            <Typography>Total Balance</Typography>
            {/* get total cryptocurrency balance in wallet*/}
        </div>
    );
}

export default TotalBalance;