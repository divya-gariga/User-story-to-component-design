import { Typography } from '@mui/material';
import React from 'react';
import Arrow from '../../atoms/Arrow';

const WatchlistCard= (props: { currencyName: string, currencyValue: number, netChange: number }) => {
    return (
        <div>
            <Typography>{props.currencyName}</Typography>
            <Typography>{props.currencyValue}</Typography>
            <Typography>
                <Arrow arrowType={''} />
                {/* if netchange is negative arrowtype=upright else downright */}
                {props.netChange}
            </Typography>
            {/* {graph} */}
        </div>
    );
}

export default WatchlistCard;