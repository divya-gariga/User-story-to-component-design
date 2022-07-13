import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Info from '../../atoms/Info';
import CurrencyChips from '../../molecules/CurrencyChips';

function CurrencySelection() {
    const [allCoinCurrencies,setAllCoinCurrencies]=useState([]);
    function getAllCoinCurrencies(){
        //get all coin currencies
    }
    useEffect(()=>{
        getAllCoinCurrencies();
    },[])
    return (
        <div>
            <Info/><Typography>Click on currency name below to display it on the graph</Typography>
            {/* {map through all the currencies of allCoinCurrencies and render the CurrencyChip} */}
            {
            allCoinCurrencies.map((coin)=>
            <CurrencyChips label=""/>)
            }
        </div>
    );
}

export default CurrencySelection;