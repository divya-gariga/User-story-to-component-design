import { Typography } from '@mui/material';
import React from 'react';
import ChevronDown from '../../atoms/ChevronDown';

const AccountDropdown = (props:{duration: number, deliveryFees: number}) => {
    return (
        <div>
            <svg >Truck</svg>
            <Typography>Standard: {props.duration}</Typography>
            <Typography>Delivery fees: {props.deliveryFees}</Typography>
            <ChevronDown/>
        </div>
    );
};

export default AccountDropdown;