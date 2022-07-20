import { Typography } from '@mui/material';
import React from 'react';

const PaymentCards=(props:{cardNumber:number,cardName:string,lastUsedDate:number,onClick:()=>void}) =>{
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