import React,{useEffect,useState} from 'react';
import AmountDetails from '../../organisms/AmountDetails';
import NavigationBar from '../../organisms/bars/NavigationBar';
import CryptoCurrency from '../../organisms/CryptoCurrency';
import Footer from '../../organisms/Footer';
import Header from '../../organisms/Header';
import PaymentMethods from '../../organisms/PaymentMethod';

function Purchase() {
    const [allCoinCurrencies,setAllCoinCurrencies]=useState([]);
    function getAllCoinCurrencies(){
        //get all coin currencies
    }
    useEffect(()=>{
        getAllCoinCurrencies();
    },[])
    return (
        <div>
            <Header/>
            <NavigationBar/>
            <CryptoCurrency/>
            <PaymentMethods userId={1}/>
            <AmountDetails transactionType={'buy'}/>
            <Footer/>
        </div>
    );
}

export default Purchase;