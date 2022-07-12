import React from 'react';
import MyPortfolio from '../../molecules/MyPortfolio';
import MyWallets from '../../molecules/MyWallets';

function DashboardRightPanel() {
    return (
        <div>
            <MyPortfolio/>
            <MyWallets/>
        </div>
    );
}

export default DashboardRightPanel;