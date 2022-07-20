import { List, Typography } from '@mui/material';
import React, { useEffect,useState } from 'react';
import Icon from '../../atoms/Icon';

const MyPortfolio=()=> {
    const [investmentsInfo,setInvestmentsInfo]=useState([{}]);
    const [totalBalance,setTotalBalance]=useState(0);
    function getUserInvestmentsByCryptoCurrency(){
        //do api call and get coins from db
        // in which user has invested
        // setInvestmentsInfo()
    }
    function getTotalBalanceByCryptoCurrency(){
        // get total of user investment from db
        // setTotalBalance()
    }
    useEffect(()=>{
        getUserInvestmentsByCryptoCurrency();
        getTotalBalanceByCryptoCurrency();
    },[])
    return (
        <div>
            <Typography>My Portfolio</Typography>
            <Icon src="piecharticon.png"/>
            <List/>
            {investmentsInfo.map((coin)=>{
                return (<div>
                <img src="coinImg"/>
                <Typography>coin.name</Typography>
                <Typography>value</Typography>
                {/* get market coin value */}
                <Typography>value change</Typography>
                {/* profit or loss of coin in the market */}
                </div>)
            })}
            <Typography>Total balance</Typography>
            <Typography>{totalBalance}</Typography>
        </div>
    );
}

export default MyPortfolio;