import { Typography } from '@mui/material';
import React, { useState } from 'react';

function DeliveryFee(props:{onChange:(args:any)=>any}) {
const [deliveryFee,setDeliveryFee]=useState(0);
const [value,setValue]=useState('');
const handleChange=(event: { target: { value: React.SetStateAction<string>; }; })=>{
    setValue(event.target.value)
    if(value=="instant")
    setDeliveryFee(0.001);
    else if(value=="faster")
    setDeliveryFee(0.0001);
    else if(value=="fast")
    setDeliveryFee(0.00001);
    else
    setDeliveryFee(0);
    props.onChange(deliveryFee);
}
    return (
        <div>
            <Typography>Select speed delivery</Typography>
            <select value={value} onChange={handleChange}>
                <option value="instant">Instant : 2-5 min<Typography>delivery fees:0.001BTC</Typography></option>
                <option value="faster">Faster : 4 hours<Typography>delivery fees:0.0001BTC</Typography></option>
                <option value="fast">Fast : 120 hours <Typography>Delivery Fees: 0.00001BTC</Typography></option>
                <option value="none"><Typography>none</Typography></option>
            </select>
        </div>
    );
}

export default DeliveryFee;