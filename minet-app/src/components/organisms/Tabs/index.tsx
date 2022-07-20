import React, { useState,useEffect } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import {TabPanel} from '@mui/lab';
import { Typography } from '@mui/material';
import TimePeriod from '../../molecules/Tabs/TimePeriod';
import WalletTransactions from '../../molecules/Tabs/WalletTransactions';
const DetailsTabs=(props:{userId:number,currencyId:number,walletId:number }) =>{
    const [value, setValue] = React.useState('one');
    const [coin,setCoin]=useState([{}]);
    const [walletDetails,setWalletDetails]=useState([{}]);
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };
    function getCryptoCurrenyDetails(){
        //get cryptocurreny 
        // details from market using the currencyid
        //setCoin();
    } 
    function getWalletDetails(){
        //get wallet details of selected crypto currency
        //make an api call using walletId of that user
        //setWalletDetails();
    }
    const onClickHandler=(timeperiod:string)=>{
        // draw graph for specified timeperiod
    }
    useEffect(()=>{
        getCryptoCurrenyDetails();
    },[])
    return (
        <Box>
            <Tabs
                value={value}
                onChange={handleChange}>
                <Tab value="one" label="Overview" />
                <Tab value="two" label="Wallet"/>
            </Tabs>
            <TabPanel value="one">
                <Box>
                    <Typography>Current Value</Typography>
                    {/* crypto currency value {coin value} */} 
                    <TimePeriod onClick={(timeperiod)=>onClickHandler(timeperiod) }/>
                    {/* Graph */}
                    {/* Overview about selected crypto currency and its resources links */}
                    <Typography>crypto currency description</Typography>
                </Box>
            </TabPanel>
            <TabPanel value="two">
               <Typography>Total balance</Typography> 
               {/* get total balance of wallet */}
                {walletDetails.map(wallet=>
                    <WalletTransactions date={"wallet.transactiondata"} name={"username"} amount={0} src={'tickmark.jpg'} label={'currency name'}/>
                    )}
            </TabPanel>
        </Box>
    );
}

export default DetailsTabs;