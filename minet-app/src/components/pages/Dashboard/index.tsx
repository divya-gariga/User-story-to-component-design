import React from 'react';
import CurrencyChips from '../../molecules/CurrencyChips';
import NavigationBar from '../../organisms/bars/NavigationBar';
import DashboardRightPanel from '../../organisms/DashboardRightPanel';
import Footer from '../../organisms/Footer';
import Header from '../../organisms/Header';
import MyPortfolioValue from '../../organisms/MyPortfolioValue';
import Watchlist from '../../organisms/Watchlist';

function Dashboard() {
    return (
        <div>
            <Header/>
            <NavigationBar/>
            <Watchlist/>
            <MyPortfolioValue coinCurrency={''}/>
            <DashboardRightPanel/>
            <CurrencyChips label={''}/>
            <Footer/>
        </div>
    );
}

export default Dashboard;