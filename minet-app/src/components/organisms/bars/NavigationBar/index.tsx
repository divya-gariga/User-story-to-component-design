import React from 'react';
import Logo from '../../../atoms/Logo';
import Dashboard from '../../../atoms/Dashboard';
import Portfolio from '../../../atoms/Portfolio';
import Switch from '../../../atoms/Switch';
import Notification from '../../../atoms/Notification';
import Logout from '../../../atoms/Logout';
function NavigationBar() {
    return (
        <div>
            <Logo/>
            <Dashboard/>
            <Portfolio/>
            <Switch/>
            <Notification/>
            <Logout/>
        </div>
    );
}

export default NavigationBar;


