import { Typography } from '@mui/material';
import React from 'react';
import TickMark from '../../atoms/TickMark';

function PaymentCrypto(props:{currencyType: string,amount:number,onClick:()=>any}) {
    return (
        <div>
             {/* {()?<TickMark/>:""} */}
            <img>{props.currencyType}</img>
            <Typography>{props.amount}</Typography> 
            {/* on select display checkmark and highlight the currency */}
        </div>
    );
}

export default PaymentCrypto;