import { Button, Typography } from '@mui/material';
import React from 'react';
import SecondaryButton from '../../../molecules/Buttons/SecondaryButton';

function WatchlistBar(props: { currencyType: string }) {
    const { currencyType } = props;
    // fetch(/)

    return (
        <>
            {
                (currencyType == "Cash") ? <div>
                    
                    <SecondaryButton icon="" buttonContent='CASH DEPOSIT' />
                    <SecondaryButton icon="" buttonContent='WITHDRAWL'></SecondaryButton>
                </div> : <>
                    {/* for the given currency render value change,
             market capital vol of 24h and circulating supply frome the api */}
                    <Typography>value change</Typography>
                    <Typography> Market capital</Typography>
                    <Typography> Vol. 24H</Typography>
                    <Typography> Circulating supply</Typography>
                </>
            }
        </>
    );

}

export default WatchlistBar;
