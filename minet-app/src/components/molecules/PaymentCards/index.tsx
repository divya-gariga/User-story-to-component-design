import { Typography } from '@mui/material';
import React from 'react';

function PaymentCards(props:{cardNumber:number,lastUsedDate:number}) {
    return (
        <div>
            <Typography>Ending: {props.cardNumber}</Typography>
            <Typography>Last time used: {props.lastUsedDate}</Typography>
            {/*
            display card type(Visa, MasterCard)
            based on the number
            */}
        </div>
    );
}

export default PaymentCards;