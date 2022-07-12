import { Button, Typography } from '@mui/material';
import React,{useState,useEffect} from 'react';
import SecondaryButton from '../../../molecules/Buttons/SecondaryButton';

function WatchlistBar(props: { userId:number,currencyType: string,currencyId:number }) {
    const { currencyType } = props;
    const [coin,setCoin]=useState([{}]);
    function getCryptoCurrencyDetails(){
        //get cryptocurreny 
        // details from market using the currencyid
        //setCoin();
    } 
    useEffect(()=>{
        getCryptoCurrencyDetails();
    },[])
    return (
        <>
            {
                (currencyType == "Cash") ? <div>
                    <img src="coin image"/>
                    <Typography>coin name</Typography>   
                    {/* coin name */}
                    <SecondaryButton icon="" buttonContent='CASH DEPOSIT' />
                    <SecondaryButton icon="" buttonContent='WITHDRAWL'></SecondaryButton>
                </div> : <>
                    {/* for the given currency(crypto currency) render value change,
             market capital vol of 24h and circulating supply frome the api */}
                    <img src="coin image"/>
                    <Typography>coin name</Typography>   
                    <Typography>value change</Typography>
                    <Typography> Market capital</Typography>
                    <Typography> Vol. 24H</Typography>
                    <Typography> Circulating supply</Typography>
                    <SecondaryButton icon="star" buttonContent='ADDED TO WATCHLIST' />
                </>
            }
        </>
    );

}

export default WatchlistBar;
