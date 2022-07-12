import React, { useEffect,useState } from 'react';
import ColumnHeader from '../../molecules/Columnheader';
import SearchBar from '../../molecules/Searchbar/Searchbar';
import TradeTabs from '../../molecules/Tabs/TradeTabs';
import NavigationBar from '../../organisms/bars/NavigationBar';
import Footer from '../../organisms/Footer';
import Header from '../../organisms/Header';

function Trade() {
    const [allCoins,setCoins]=useState([{}]);
    function getAllCryptoCurrencies(){
        //get all cryptocurrencies for trade screen
        // and its details from market
    }
    useEffect(()=>{
        getAllCryptoCurrencies();
    },[])
    return (
        <div>
            <Header/>
            <NavigationBar/>
            <SearchBar filterIcon={false}/>
            <ColumnHeader/>
            {allCoins.map((coin)=>
                  <TradeTabs currencyName={'coinname'} price={0} change={0} marketCap={0} userId={1} currencyId={0} />
                  )
            }
            <Footer/>
        </div>
    );
}

export default Trade;