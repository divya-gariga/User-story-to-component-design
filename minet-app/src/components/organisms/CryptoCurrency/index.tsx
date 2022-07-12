import React, { useEffect, useState } from 'react';
import PaymentCrypto from '../../molecules/PaymentCrypto';

function CryptoCurrency() {
    const [allCoinCurrencies,setAllCoinCurrencies]=useState([]);
    function getAllCoinCurrencies(){
        //get all coin currencies
    }
    useEffect(()=>{
        getAllCoinCurrencies();
    },[])
    return (
        <div>
             {allCoinCurrencies.map((coin)=>
                        <PaymentCrypto currencyType={"crypto currency"} amount={0}/>
                        )
            }
        </div>
    );
}

export default CryptoCurrency;