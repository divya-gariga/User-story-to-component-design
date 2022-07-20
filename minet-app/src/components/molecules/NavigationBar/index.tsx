import React from 'react';
import Logo from '../../atoms/Logo';
import Dashboard from '../../atoms/Icon';
import Portfolio from '../../atoms/Icon';
import Switch from '../../atoms/Icon';
import Notification from '../../atoms/Icon';
import Logout from '../../atoms/Icon';
const NavigationBar=()=> {
    return (
        <div>
            <div onClick={() => console.log("goto Tradescreen")}>
                <Logo />
            </div>
            <div onClick={() => console.log("goto dashboard")}>
                <Dashboard src={'dashboard.jpg'} />
            </div>
            {/* on */}
            <Portfolio src={'portfolio.jpg'} />
            <Switch src={'switch.jpg'} />
            <Notification src={'notification.jpg'} />
            <Logout src={'logout.jpg'} />
        </div>
    );
}

export default NavigationBar;


