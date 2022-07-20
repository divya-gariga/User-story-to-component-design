import React, { useEffect,useState } from 'react';
import NavigationPanel from '../../organisms/bars/NavigationPanel';
import WatchlistBar from '../../organisms/bars/WatchlistBar';
import Footer from '../../organisms/Footer';
import Header from '../../organisms/Header';
import TradeTabs from '../../molecules/Tabs/TradeTabs';
import DetailsTabs from '../../organisms/Tabs';
import WalletTransactions from '../../molecules/Tabs/WalletTransactions';
import { Typography } from '@mui/material';

const Wallet=()=> {
    const [walletDetails,setWalletDetails]=useState([{}]);
    function getWalletDetails(){
        //get wallet details of selected crypto currency
        //make an api call using walletId of that user
        //setWalletDetails();
    }
    useEffect(()=>{
        getWalletDetails();
    },[])
    return (
        <div>
          <Header/>
          <NavigationPanel/>
          <WatchlistBar userId={1} currencyType={'cash'} currencyId={0}/>
          <Typography>Total balance</Typography> 
               {/* get total balance of wallet */}
                {walletDetails.map(wallet=>
                    <WalletTransactions date={"wallet.transactiondata"} name={"username"} amount={0} src={'tickmark.jpg'} label={'Received Bitcoin'}/>
                    )}
          <Footer/>
        </div>
    );
}

export default Wallet;