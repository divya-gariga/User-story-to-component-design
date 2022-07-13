import React from 'react';
import  Button  from '@mui/material/Button';
function PrimaryButton(props:{icon:string,buttonContent:string,onClickHandler:(arg:any)=>any}) {
    const {icon,buttonContent,onClickHandler}=props;
    return (
        <div>
            <Button variant="contained" color="primary" onClick={onClickHandler}>{icon} {buttonContent}
             </Button>
        </div>
    );
}

export default PrimaryButton;