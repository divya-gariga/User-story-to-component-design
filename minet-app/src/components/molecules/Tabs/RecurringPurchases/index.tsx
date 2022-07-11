import { Typography } from '@mui/material';
import React from 'react';
import Repeat from '../../../atoms/Repeat';
function RecurringPurchases() {
    return (
        <div>
            <Repeat></Repeat>
            <Typography>Buy 2000 of BTC every 02 weeks</Typography>
            
        </div>
    );
}

export default RecurringPurchases;