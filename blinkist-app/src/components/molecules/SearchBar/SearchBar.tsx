import React, { useEffect, useState } from 'react';
import Search from '../../atoms/Icons/Search/Search.svg';
import { InputAdornment, TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const SearchBar = (props: { icon: string, onInput: (arg1: string) => void, onClick: () => void }) => {
    const [text, setText] = useState('');
    let magnifyingIcon = null;
    if (props.icon === "search") {
        magnifyingIcon = <img alt="search" src={Search} />;
    }
    useEffect(() => { props.onInput(text) }, [text])
    return (
        <TextField autoComplete="off" onChange={(e) => setText(e.target.value)}
            value={text}
            style={{ fontFamily: "CeraProMedium" }}
            sx={{
                width: "360px",
                height: "28px",
            }}
            id="input-with-icon-textfield"
            placeholder='Search by title or author'
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        {magnifyingIcon}
                    </InputAdornment>
                ),
                endAdornment: (
                    <InputAdornment position="end">
                        <CloseIcon sx={{ color: "#828894", fontSize: "medium" }} onClick={props.onClick} />
                    </InputAdornment>
                )
            }}
            variant="standard"
            size='medium'
            data-testid="search"
        />
    )
}
export default SearchBar;


