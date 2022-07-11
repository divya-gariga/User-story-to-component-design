import { IconButton, } from '@mui/material';
import { assertValidExecutionArguments } from 'graphql/execution/execute';
import React, { useState } from 'react';
import StarFill from '../../../atoms/StarFill';
import StarLine from '../../../atoms/StarLine';

function WatchButton(props:{isInWatchList:boolean,userId:number, currencyEntryId:number}) {
    const [isClicked,setIsClicked]=useState(false);
    const {isInWatchList}=props;
    const toggleStar=()=>{
        (isClicked)?setIsClicked(false):setIsClicked(true)
        updateWatchList();
    }
    function updateWatchList(){
        //add to user's watchList accordingly for the given entry
        //using axios.post
    }
    return (
        <div >
            <IconButton onClick={()=>{toggleStar(); }}>
            {(isClicked||isInWatchList)?<StarFill/>:<StarLine/>}
            </IconButton>
        </div>
    );
}

export default WatchButton;