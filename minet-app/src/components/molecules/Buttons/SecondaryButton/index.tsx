import React from 'react';
import  Button  from '@mui/material/Button';
import WatchListStar from '../../../atoms/StarFill/index';
function SecondaryButton(props:{icon:string,buttonContent:string}) {
    const {icon,buttonContent}=props;
    let inputIcon=null;
    if(icon==="star")
     inputIcon=<WatchListStar/>
    if(icon==="plus")
     inputIcon="+"
    return ( 
        <div>
        <Button variant="outlined" color="primary">{inputIcon} {buttonContent}</Button>
        </div>
    );
}

export default SecondaryButton;