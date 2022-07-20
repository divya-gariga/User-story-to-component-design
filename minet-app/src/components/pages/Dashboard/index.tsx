import React from 'react';
import Button from '../../molecules/Buttons';
import NavigationPanel from '../../organisms/bars/NavigationPanel';
import DashboardRightPanel from '../../organisms/DashboardRightPanel';
import Footer from '../../organisms/Footer';
import Header from '../../organisms/Header';
import MyPortfolioValue from '../../organisms/MyPortfolioValue';
import Watchlist from '../../organisms/Watchlist';

const Dashboard=() => {
    return (
        <div>
            <Header/>
            <NavigationPanel/>
            <Watchlist/>
            <MyPortfolioValue coinCurrency={''}/>
            <DashboardRightPanel/>
            <Button icon={''} buttonContent={'currencyname'} onClickHandler={function (arg: any) {
                throw new Error('Function not implemented.');
            } }/>
            <Footer/>
        </div>
    );
}

export default Dashboard;