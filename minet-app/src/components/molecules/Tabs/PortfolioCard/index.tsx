import { Typography } from '@mui/material';
import React from 'react';

const PortfolioCard=(props:{currencyType:string,value:number}) => {
    const {currencyType,value}=props;
    return (
        <div>
            <Typography>{currencyType}</Typography>
            <Typography>{value}</Typography>
        </div>
    );
}

export default PortfolioCard;