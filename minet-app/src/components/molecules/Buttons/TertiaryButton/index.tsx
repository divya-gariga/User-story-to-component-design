import React from 'react';
import  Button  from '@mui/material/Button';
function TertiaryButton(props:{buttonContent:string}) {
    const {buttonContent}=props;
    return (
        <div>
            <Button variant="contained">{buttonContent}</Button>
        </div>
    );
}

export default TertiaryButton;