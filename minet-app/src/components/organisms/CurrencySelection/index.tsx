import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Info from '../../atoms/Icon';
import CurrencyChips from '../../molecules/Buttons';

const CurrencySelection=()=>{
    const [allCoinCurrencies,setAllCoinCurrencies]=useState([]);
    function getAllCoinCurrencies(){
        //get all coin currencies
    }
    useEffect(()=>{
        getAllCoinCurrencies();
    },[])
    return (
        <div>
            <Info src="info.jpg"/><Typography>Click on currency name below to display it on the graph</Typography>
            {/* {map through all the currencies of allCoinCurrencies and render the CurrencyChip} */}
            {
            allCoinCurrencies.map((coin)=>
            {
                    return <CurrencyChips icon={''} buttonContent={''} onClickHandler={function (arg: any) {
                        throw new Error('Function not implemented.');
                        // show respective graph
                    } }/>;
                })
            }
        </div>
    );
}

export default CurrencySelection;