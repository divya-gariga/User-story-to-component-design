import { Grid, Typography } from '@mui/material';
import React, { useEffect,useState } from 'react';
import PortfolioCard from '../../molecules/Tabs/PortfolioCard';
import TimePeriod from '../../molecules/Tabs/TimePeriod';

const MyPortfolioValue=(props:{coinCurrency:string})=> {

    const [totalInvestment,setTotalInvestment]=useState(0);
    const [coinValue,setCoinValue]=useState(0);

    function getTotalInvestmentOfUser(){
        //get total investment of user 
        // setTotalInvestment(0);
    }
    function getCurrencyInfo(){
    //    do api call for getting timely info about each coin
    // setCoinValue()

    }
    const onClickHandler=(timeperiod:string)=>{
        // draw graph for specified timeperiod
    }
    useEffect(()=>{
        getCurrencyInfo();
        getTotalInvestmentOfUser();
    },[])
    return (
        <div>
            <Grid>
                <Grid item>
                    <Typography>Total Investment</Typography>
                    <PortfolioCard currencyType="$" value={totalInvestment} />
                    <Typography>Bitcoin</Typography>
                    <PortfolioCard currencyType="$" value={coinValue}/>
                    <TimePeriod onClick={(timeperiod)=>onClickHandler(timeperiod)}/>
                </Grid>
                <Grid>  
                    {/* portfolio Graph */}
                    {/* draw the graph based on selected time period */}
                </Grid>
            </Grid>
        </div>
    );
}

export default MyPortfolioValue;