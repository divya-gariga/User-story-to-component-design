import React from 'react';
import  {Button,ButtonProps}  from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
const PrimaryButton=(props:{icon:string,buttonContent:string,onClickHandler:(arg:any)=>any}&ButtonProps)=>{
    return (
        <div>
            <Button variant={props.variant}
            color={props.color} 
            onClick={props.onClickHandler}
            startIcon={props.icon}
            >
                {props.buttonContent}
             </Button>
        </div>
    );
}

export default PrimaryButton;     