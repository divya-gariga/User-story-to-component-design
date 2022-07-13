import { Grid, List, Typography } from '@mui/material';
import { responsePathAsArray } from 'graphql';
import React, { useEffect, useState } from 'react';
import Edit from '../../atoms/Edit';
import WatchlistCard from '../../molecules/WatchlistCard';

function Watchlist() {
    const [watchListData, setWatchListData] = useState([{}]);
    function getWatchListByUserId() {
        {/* get users watch list from db
           fetch all the currencies 
           from apis that user has stored in watchlist and render as follows */}
        let data = [{}];
        fetch('/watchlist/user')
            .then((response) => response.json())
            .then((items) => {
                    data=items
                return data;
            });
            return data;
    }
    useEffect(() => {
        return setWatchListData(getWatchListByUserId());
    }, [])
    return (
        <div>
            <Typography>Watchlist</Typography>
            <a href="#">Discover assets</a>
            {/* goto trade screen */}

            {/* {miscellaneous icons } */}
            <Edit/>
            <Grid/>
            <List/>
            {/* {render each watchlist data} */}
            <WatchlistCard currencyName={''} currencyValue={0} netChange={0}/>
        </div>
    );
}

export default Watchlist;