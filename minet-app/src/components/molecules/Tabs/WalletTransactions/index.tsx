import { Typography } from '@mui/material';
import React from 'react';
import TickMark from '../../../atoms/TickMark';

function WalletTransactions(props:{date:string, name: string,amount:number}) {
    return (
        <div>
            <TickMark/>
            <Typography>{props.date}</Typography>
            <Typography>Received Bitcoin</Typography>
            <Typography variant='caption'>{props.name}</Typography>
            <Typography>{props.amount}</Typography>
        </div>
    );
}

export default WalletTransactions;