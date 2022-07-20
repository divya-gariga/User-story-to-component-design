import React, { useEffect, useState } from 'react';
import PaymentCrypto from '../../molecules/PaymentCrypto';

const CryptoCurrency=()=> {
    const [allCoinCurrencies,setAllCoinCurrencies]=useState([]);
    function getAllCoinCurrencies(){
        //get all coin currencies
    }
    function handleClick(){
        
    }
    useEffect(()=>{
        getAllCoinCurrencies();
    },[])
    return (
        <div>
             {allCoinCurrencies.map((coin)=>
                        <PaymentCrypto currencyType={"crypto currency"} amount={0} onClick={handleClick}/>
                        )
            }
        </div>
    );
}

export default CryptoCurrency;