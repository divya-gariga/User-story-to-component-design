import { Typography } from '@mui/material';
import React from 'react';
import SecondaryButton from '../../molecules/Buttons/SecondaryButton';

function AmountDetails(props:{transactionType:string,}) {
    const {transactionType}=props
    let button=null;
    if(transactionType==="sell")
    button=<SecondaryButton icon={''} buttonContent={'Sell max'}/> 
    else
    button=<SecondaryButton icon={''} buttonContent={'Buy max'}/> 
    return (
        <div>
            <Typography>Amount details</Typography>
            <input type="number" value={'wallet balance'} />  
            {button}
             {/* {slider icon} */}
            <input type="number" value={'calculate crypto current amount to sell or buy'} />            
            {/* wallet amount/1 bit coin's price */}
        </div>
    );
}

export default AmountDetails;