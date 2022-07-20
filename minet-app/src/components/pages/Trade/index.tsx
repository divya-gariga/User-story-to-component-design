import React, { useEffect,useState } from 'react';
import ColumnHeader from '../../molecules/Columnheader';
import SearchBar from '../../molecules/Searchbar';
import TradeTabs from '../../molecules/Tabs/TradeTabs';
import NavigationPanel from '../../organisms/bars/NavigationPanel';
import Footer from '../../organisms/Footer';
import Header from '../../organisms/Header';

const Trade=() =>{
    const [coins,setCoins]=useState([{}]);
    const [filteredCoins,setFilteredCoins]=useState([{}]);
    function getAllCryptoCurrencies(){
        //get all cryptocurrencies for trade screen
        // and its details from market
    }
    useEffect(()=>{
        getAllCryptoCurrencies();
    },[])
    const handleOnInput=(text:string)=>{
        // filter the coins by given text and set 
        // setFilteredCoins();
    }
    return (
        <div>
            <Header/>
            <NavigationPanel/>
            <SearchBar filterIcon={false} onInput={(text)=>handleOnInput(text)}/>
            <ColumnHeader/>
            {filteredCoins.length===0?(coins.map((coin)=>
                  <TradeTabs currencyName={'coinname'} price={0} change={0} marketCap={0} userId={1} currencyId={0} />
                  )):(filteredCoins.map((coin)=>
                  <TradeTabs currencyName={'coinname'} price={0} change={0} marketCap={0} userId={1} currencyId={0} />
                  ))}
            <Footer/>
        </div>
    );
}

export default Trade;