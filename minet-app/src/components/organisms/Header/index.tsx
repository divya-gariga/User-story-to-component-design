import { Typography } from '@mui/material';
import React from 'react';
import UserAccountMenu from '../../molecules/UserAccountMenu';
import PrimaryButton from '../../molecules/Buttons';

const Header=() =>{
    return (
        <div>
            <Typography>Dashboard</Typography>
            <PrimaryButton variant="contained" buttonContent='Sell' icon={''} onClickHandler={function (arg: any) {
                throw new Error('Function not implemented.');
                // go to sell screen 
            } }/>
            <PrimaryButton variant="contained" color="primary" icon={''} buttonContent={'Buy'} onClickHandler={function (arg: any) {
                throw new Error('Function not implemented.');
                // go to purchase screen 
            } }></PrimaryButton>
            <UserAccountMenu/>
        </div>
    );
}

export default Header;