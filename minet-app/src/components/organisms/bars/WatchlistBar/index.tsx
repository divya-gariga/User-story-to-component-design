import { Button, Typography } from '@mui/material';
import React,{useState,useEffect} from 'react';
import PrimaryButton from '../../../molecules/Buttons';

const WatchlistBar=(props: { userId:number,currencyType: string,currencyId:number })=> {
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
                    <PrimaryButton variant="outlined" color="primary" icon="" buttonContent='CASH DEPOSIT' onClickHandler={function (arg: any) {
                        throw new Error('Function not implemented.');
                    } } />
                    <PrimaryButton variant="outlined" color="primary" icon="" buttonContent='WITHDRAWL' onClickHandler={function (arg: any) {
                        throw new Error('Function not implemented.');
                    } }/>
                </div> : <>
                    {/* for the given currency(crypto currency) render value change,
             market capital vol of 24h and circulating supply frome the api */}
                    <img src="coin image"/>
                    <Typography>coin name</Typography>   
                    <Typography>value change</Typography>
                    <Typography> Market capital</Typography>
                    <Typography> Vol. 24H</Typography>
                    <Typography> Circulating supply</Typography>
                    <PrimaryButton variant="outlined" color="primary" icon="star" buttonContent='ADDED TO WATCHLIST' onClickHandler={function (arg: any) {
                            throw new Error('Function not implemented.');
                        } } />
                </>
            }
        </>
    );

}

export default WatchlistBar;
