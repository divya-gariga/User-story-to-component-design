import React from 'react';
import { Typography } from '@mui/material';

const Star = (props:{fill:boolean}) => {
    let icon=null;
    if(props.fill){
        icon=<img src="/starfill.jpg" alt="starfill icon" />
    }
    else{
        icon=<img src="/starline.jpg" alt="starline icon" />
    }
    return (
        <div>
            {icon}
        </div>
    );
};

export default Star;