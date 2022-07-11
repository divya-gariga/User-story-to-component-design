import { Typography } from '@mui/material';
import React, { useEffect,useState } from 'react';

function MyWallets() {
    const [investmentsInfo,setInvestmentsInfo]=useState({});
    const [totalBalance,setTotalBalance]=useState(0);
    function getUserInvestmentsByCash(){
        // ex: USD Coin in our case
        // setInvestmentsInfo()
    }
    function getTotalBalanceByCash(){
        // get total of user investment from db
        // setTotalBalance()
    }
    useEffect(()=>{
        getTotalBalanceByCash();
        getUserInvestmentsByCash();
    },[])
    return (
        <div>
            {/* display investsment info */}
            <img src="coinImg"/>
            <Typography>USD Coin</Typography>
            <Typography>us dollar</Typography>
            <Typography>{totalBalance}</Typography>    
        </div>
    );
}
export default MyWallets;