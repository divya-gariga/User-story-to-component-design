import React from 'react';
import Chevron from '../../atoms/Chevron';
import Avatar from '../../atoms/Avatar';
const UserAccountMenu = () => {
    return (
        <div>
            <Avatar/>
            <Chevron chevronType={'down'}/>
        </div>
    );
};

export default UserAccountMenu;