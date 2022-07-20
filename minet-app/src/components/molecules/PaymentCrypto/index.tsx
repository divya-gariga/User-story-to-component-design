import { Typography } from '@mui/material';
import React from 'react';

const PaymentCrypto=(props:{currencyType: string,amount:number,onClick:()=>any}) =>{
    return (
        <div>
            <img>{props.currencyType}</img>
            <Typography>{props.amount}</Typography> 
        </div>
    );
}

export default PaymentCrypto;