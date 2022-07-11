import { Typography } from '@mui/material';
import { responsePathAsArray } from 'graphql';
import React, { useEffect, useState } from 'react';

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
            {/* {miscellaneous icons } */}
            {/* {render each watchlist data} */}
            <Typography>Currency</Typography>
            <Typography>Currency value</Typography>
            {/* {graph} */}
        </div>
    );
}

export default Watchlist;