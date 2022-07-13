import { Typography } from '@mui/material';
import React from 'react';
import PrimaryButton from '../../molecules/Buttons/PrimaryButton';

function OrderSummary(props:{transactionType:string,paymentMethod:any[],deliveryFees:number,amount:number,currencyId:number,onClickHandler:()=>any}) {
    const {transactionType,paymentMethod,deliveryFees,amount,currencyId,onClickHandler}=props
    return (
        <>
        <div>
            {transactionType==="buy"}?(
            <Typography>you are buying</Typography>
            {amount}
            {/* {get the currency value by currency id}    */}
            <Typography>Payment method</Typography>
            {/* {paymentMethod} */}
            <Typography>Delivery Fees</Typography>
            {deliveryFees}
            <Typography>Deposit to </Typography>
            {/* {deposit to currency id's wallet} */}
            <Typography>{amount}</Typography>
            <Typography>Minet fee: 1000 </Typography>
            <Typography>Total :{}</Typography>
            {/* calculate total */}
            <PrimaryButton icon={''} buttonContent={'BUY NOW'} onClickHandler={onClickHandler} ></PrimaryButton>
            )
            :
           ( <Typography>you are selling</Typography>
            {amount}
            {/* {get the currency value by currency id}    */}
            <Typography>Payment method</Typography>
            {paymentMethod}
            <Typography>Delivery Fees</Typography>
            {deliveryFees}
            <Typography>Deposit to Rupee Coin</Typography>
            <Typography>{amount}</Typography>
            <Typography>Minet fee: 1000 </Typography>
            <Typography>Total :{}</Typography>
            {/* calculate total */}
            <PrimaryButton icon={''} buttonContent={'SELL NOW'} onClickHandler={onClickHandler}></PrimaryButton>)
        </div>
        </>
    );
}

export default OrderSummary;