import { Typography } from '@mui/material';
import React from 'react';
import AccountDropdown from '../../molecules/AccountDropdown';
import PrimaryButton from '../../molecules/Buttons/PrimaryButton';
import TertiaryButton from '../../molecules/Buttons/TertiaryButton';

function Header() {
    return (
        <div>
            <Typography>Dashboard</Typography>
            <TertiaryButton buttonContent='Sell'/>
            <PrimaryButton icon={''} buttonContent={'Buy'}></PrimaryButton>
            <AccountDropdown/>
        </div>
    );
}

export default Header;