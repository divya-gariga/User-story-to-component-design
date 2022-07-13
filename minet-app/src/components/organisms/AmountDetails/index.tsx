import { Typography } from '@mui/material';
import React,{useState} from 'react';
import SecondaryButton from '../../molecules/Buttons/SecondaryButton';

function AmountDetails(props:{transactionType:string,onChange:(args:any)=>any}) {
    const [amount,setAmount]=useState(0)
    const {transactionType}=props
    const handleChange=(event: { target: { value: React.SetStateAction<string>; }; })=>{
        setAmount(amount);
        props.onChange(amount);
    }
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
            <input type="number" value={amount} onChange={handleChange}  />    
            {/* calculate crypto current amount to sell or buy*/}
                    
            {/* wallet amount/1 bit coin's price */}
        </div>
    );
}

export default AmountDetails;