import React,{useEffect,useState} from 'react';
import { Typography } from '@mui/material';
import AmountDetails from '../../organisms/AmountDetails';
import NavigationPanel from '../../organisms/bars/NavigationPanel';
import TickMark from '../../atoms/Icon';
import PrimaryButton from '../../molecules/Buttons';
import CryptoCurrency from '../../organisms/CryptoCurrency';
import DeliveryFee from '../../organisms/DeliveryFee';
import DepositToRupee from '../../organisms/DepositToRupeeCoin';
import Footer from '../../organisms/Footer';
import Header from '../../organisms/Header';
import OrderSummary from '../../organisms/OrderSummary';
import PaymentMethods from '../../organisms/PaymentMethod';
import TotalBalance from '../../organisms/TotalBalance';

const Sell=()=> {
    const [allCoinCurrencies,setAllCoinCurrencies]=useState([]);
    const [deliveryFee,setDeliveryFee]=useState(0.001);
    const [isPaymentSuccess,setIsPaymentSuccess]=useState(false);
    const [amount,setAmount]=useState(0)
    const [currencyId,setCurrencyId]=useState(0);
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
            <TotalBalance userId={1} currencyId={0}/> 
            <AmountDetails transactionType={'sell'} onChange={(amount)=>setAmount(amount)}/>
            <DepositToRupee/>
            <OrderSummary transactionType={'sell'} paymentMethod={[]} deliveryFees={deliveryFee} amount={amount} currencyId={0} onClickHandler={()=>showIfPaymentSuccessfull()}/>
            )
            :(
                <TickMark src="tickmark.jpg"/>
                <Typography>{amount}</Typography>
                <Typography>
                    Sell is completed, please check your balance in your Rupee Coin
                </Typography>
                <PrimaryButton variant="outlined" color="primary" icon={''} buttonContent={'SELL CRYPTO'} onClickHandler={function (arg: any) {
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

export default Sell;