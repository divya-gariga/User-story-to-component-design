import { Typography } from '@mui/material';
import React from 'react';
import {useState, useEffect} from 'react'
import PaymentCards from '../../molecules/PaymentCards';

const PaymentMethods=(props:{userId: number,onChange:(args:any)=>any})=> {
    const [paymentMethod,setPaymentMethod]=useState([] as any);
    const [allPaymentMethods,setAllPaymentMethods]=useState([]);
    const [cardName,setCardName]=useState("");
    const [cardNumber,setCardNumber]=useState(0);
    function getAllPaymentMethods(){
        //get all payment methods a user has
        //using userId
        //setAllPaymentMethods()
    }
    function handleClick(cardName:any,cardNumber:any){
        setCardName(cardName);
        setCardNumber(cardNumber);
        setPaymentMethod([cardNumber,cardName]);
        props.onChange(paymentMethod);
    }
    useEffect(()=>{
        getAllPaymentMethods();
    },[])
    return (
        <div>
            {allPaymentMethods.map((paymentMethod)=><PaymentCards cardNumber={0} cardName={''} lastUsedDate={0}  onClick={()=>handleClick(cardName,cardNumber)}/>)}
            {/* takes card number of that particular payment method of user*/}
            <Typography>Cash</Typography>
        </div>
    );
}

export default PaymentMethods;