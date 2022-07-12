import { Typography } from '@mui/material';
import React from 'react';
import SecondaryButton from '../../molecules/Buttons/SecondaryButton';

function Footer() {
    return (
        <div>
            
                <Typography>Dashboard</Typography>
                <Typography>Careers</Typography>
                <Typography>Legal and privacy</Typography>
                <Typography> 2021 Minet</Typography>
                <Typography>English</Typography>
                <SecondaryButton icon={''} buttonContent={'NEED HELP'}/>
        </div>
    );
}

export default Footer;