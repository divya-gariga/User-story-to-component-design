import { Typography } from '@mui/material';
import React,{useState} from 'react';
import Button from '../../molecules/Buttons';

const AmountDetails= (props:{transactionType:string,onChange:(args:any)=>any}) => {
    const [amount,setAmount]=useState(0)
    const {transactionType}=props
    const handleChange=(event: { target: { value: React.SetStateAction<string>; }; })=>{
        setAmount(amount);
        props.onChange(amount);
    }
    let button=null;
    if(transactionType==="sell")
    button=<Button icon={''} buttonContent={'Sell max'} onClickHandler={function (arg: any) {
        throw new Error('Function not implemented.');
    } }/> 
    else
    button=<Button icon={''} buttonContent={'Buy max'} onClickHandler={function (arg: any) {
        throw new Error('Function not implemented.');
    } }/> 
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