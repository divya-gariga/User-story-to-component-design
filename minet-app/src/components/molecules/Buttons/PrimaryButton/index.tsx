import React from 'react';
import  Button  from '@mui/material/Button';
function PrimaryButton(props:{icon:string,buttonContent:string}) {
    const {icon,buttonContent}=props;
    return (
        <div>
            <Button variant="contained" color="primary">{icon} {buttonContent}</Button>
        </div>
    );
}

export default PrimaryButton;