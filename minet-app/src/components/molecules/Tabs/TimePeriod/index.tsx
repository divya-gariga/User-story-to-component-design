import React, { useEffect, useState } from 'react';
import { Typography } from '@mui/material';

const TimePeriod = (props:{onClick:(args:any)=>void}) => {
    const [timeperiod,setTimeperiod]=useState('');
    useEffect(()=>{
        props.onClick(timeperiod);
    },[timeperiod])
    return (
        <div>
            <Typography onClick={()=>setTimeperiod('1H')} >1H/</Typography>
            <Typography onClick={()=>setTimeperiod('24H')}>24H</Typography>
            <Typography onClick={()=>setTimeperiod('1M')}>1M</Typography>
            <Typography onClick={()=>setTimeperiod('1Y')}>1Y</Typography>
            <Typography onClick={()=>setTimeperiod('1ALL')}>ALL</Typography>
        </div>
    );
};

export default TimePeriod;