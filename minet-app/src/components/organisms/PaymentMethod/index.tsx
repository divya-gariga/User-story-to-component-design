import { Typography } from '@mui/material';
import React from 'react';
import {useState, useEffect} from 'react'
import PaymentCards from '../../molecules/PaymentCards';
function PaymentMethods(props:{userId: number}) {
    const [allPaymentMethods,setAllPaymentMethods]=useState([]);
    function getAllPaymentMethods(){
        //get all payment methods a user has
        //using userId
        //setAllPaymentMethods()
    }
    useEffect(()=>{
        getAllPaymentMethods();
    },[])
    return (
        <div>
            {allPaymentMethods.map((paymentMethod)=><PaymentCards cardNumber={0} lastUsedDate={0}/>)}
            {/* takes card number of that particular payment method of user*/}
            <Typography>Cash</Typography>
        </div>
    );
}

export default PaymentMethods;