import { Typography } from '@mui/material';
import React,{useEffect,useState} from 'react';
import TickMark from '../../atoms/Icon';
import PrimaryButton from '../../molecules/Buttons';
import AmountDetails from '../../organisms/AmountDetails';
import NavigationPanel from '../../organisms/bars/NavigationPanel';
import CryptoCurrency from '../../organisms/CryptoCurrency';
import DeliveryFee from '../../organisms/DeliveryFee';
import Footer from '../../organisms/Footer';
import Header from '../../organisms/Header';
import OrderSummary from '../../organisms/OrderSummary';
import PaymentMethods from '../../organisms/PaymentMethod';

const Purchase=()=> {
    const [allCoinCurrencies,setAllCoinCurrencies]=useState([]);
    const [isPaymentSuccess,setIsPaymentSuccess]=useState(false);
    const [deliveryFee,setDeliveryFee]=useState(0);
    const [amount,setAmount]=useState(0)
    const [paymentMethod,setPaymentMethod]=useState([]);
    function getAllCoinCurrencies(){
        //get all coin currencies
    }
    function showIfPaymentSuccessfull(){
        //check the wallet for funds, if sufficient funds are there update the users wallet 
        setIsPaymentSuccess(true);
        //otherwise payment is not successfull
    }
    useEffect(()=>{
        getAllCoinCurrencies();
    },[])    
    return (
        <div>
            <Header/>
            <NavigationPanel/>
            {isPaymentSuccess==false}?(
            <CryptoCurrency/>
            <PaymentMethods userId={1} onChange={(pMethod)=>setPaymentMethod(pMethod)} />
            <AmountDetails transactionType={'buy'} onChange={(amount)=>setAmount(amount)}/>
            <OrderSummary transactionType={'buy'} paymentMethod={paymentMethod} deliveryFees={deliveryFee} amount={amount} currencyId={0} onClickHandler={()=>showIfPaymentSuccessfull()}/>
            <DeliveryFee onChange={(fee)=>setDeliveryFee(fee)}/>)
            :
            (
                <TickMark src="tickmark.jpg"/>
                <Typography>{amount}</Typography>
                <Typography>
                    Purchase is completed, please check your balance in your crypto waller
                </Typography>
                <PrimaryButton variant="outlined" color="primary" icon={''} buttonContent={'BUY CRYPTO'} onClickHandler={function (arg: any) {
                throw new Error('Function not implemented.');
                // show success page on success
            } }/>
                <PrimaryButton variant="contained" color="primary" icon={''} buttonContent={'GO TO USD COIN'} onClickHandler={function (arg: any) {
                throw new Error('Function not implemented.');
                // go to users wallet screen
            } }/>   
            )
            <Footer/>
        </div>
    );
}

export default Purchase;