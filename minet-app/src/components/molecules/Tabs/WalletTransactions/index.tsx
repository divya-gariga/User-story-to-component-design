import { Typography } from '@mui/material';
import React from 'react';
import Icon from '../../../atoms/Icon';

const WalletTransactions=(props:{src:string,label:string,date:string, name: string,amount:number}) => {
    return (
        <div>
            <Icon src={props.src}/>
            <Typography>{props.date}</Typography>
            <Typography>{props.label}</Typography>
            <Typography >{props.name}</Typography>
            <Typography>{props.amount}</Typography>
        </div>
    );
}

export default WalletTransactions;