import { Typography } from '@mui/material';
import React from 'react';
import PrimaryButton from '../../molecules/Buttons';

const Footer=() =>{
    return (
        <div>
            
                <Typography>Dashboard</Typography>
                <Typography>Careers</Typography>
                <Typography>Legal and privacy</Typography>
                <Typography> 2021 Minet</Typography>
                <Typography>English</Typography>
                <PrimaryButton variant="outlined" color="primary" icon={''} buttonContent={'NEED HELP'} onClickHandler={function (arg: any) {
                throw new Error('Function not implemented.');
            } }/>
        </div>
    );
}

export default Footer;