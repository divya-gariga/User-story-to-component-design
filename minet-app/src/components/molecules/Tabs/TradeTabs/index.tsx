import { Typography } from '@mui/material';
import React from 'react';
import WatchButton from '../../Buttons/WatchButton';

const  TradeTabs= (props:{userId:number,currencyId:number,currencyName:string, price:number, change:number, marketCap:number}) => {
    const {userId,currencyName,price,change,marketCap,currencyId}=props;
    return (
        <div>
            <Typography>{currencyName}</Typography>
            <Typography>{price}</Typography>
            <Typography>{change}</Typography>
            <Typography>{marketCap}</Typography>
            <WatchButton isInWatchList={false} userId={userId} currencyEntryId={currencyId}/>
        </div>
    );
};

export default TradeTabs;