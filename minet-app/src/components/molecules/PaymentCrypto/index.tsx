import { Typography } from '@mui/material';
import React from 'react';

function PaymentCrypto(props:{currencyType: string,amount:number}) {
    return (
        <div>
            <img>{props.currencyType}</img>
            <Typography>{props.amount}</Typography> 
            {/* on select display checkmark and highlight the currency */}
        </div>
    );
}

export default PaymentCrypto;