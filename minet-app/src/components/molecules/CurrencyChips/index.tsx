import { Typography } from '@mui/material';
import React from 'react';
import Button from '@mui/material/Button';
function CurrencyChips(props:{label:string}) {
    const {label:currencyChipLabel}=props;
    return (
        <div>
            <Button>{currencyChipLabel}</Button>
        </div>
    );
}

export default CurrencyChips;