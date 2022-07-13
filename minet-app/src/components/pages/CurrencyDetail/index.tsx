import React from 'react';
import NavigationPanel from '../../organisms/bars/NavigationPanel';
import WatchlistBar from '../../organisms/bars/WatchlistBar';
import Footer from '../../organisms/Footer';
import Header from '../../organisms/Header';
import DetailsTabs from '../../organisms/Tabs';

function CurrencyDetail(props:{currencyId:number,userId:number, walletId:number}) {
    const {currencyId,userId, walletId}=props;
    return (
        <div>
            <Header/>
            <NavigationPanel/>
            <WatchlistBar userId={1} currencyType={'crypto'} currencyId={currencyId}/>
            <DetailsTabs userId={1} currencyId={currencyId} walletId={walletId}/>
            <Footer/>
        </div>
    );
}

export default CurrencyDetail;