import { Typography } from '@mui/material';
import React from 'react';
import TickMark from '../../../atoms/TickMark';
function Transaction(props:{date:number,currency:string,transactionAmount:number}) {
    return (
        <div>
            <Typography>Date: {props.date}</Typography>
            <TickMark></TickMark>
            <Typography>{props.currency}</Typography>
            <Typography>{props.transactionAmount}</Typography>
            
        </div>
    );
}

export default Transaction;