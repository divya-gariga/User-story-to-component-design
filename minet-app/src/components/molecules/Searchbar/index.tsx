import { TextField, InputAdornment } from '@mui/material';
import React, { useState,useEffect } from 'react';
import Icon from '../../atoms/Icon';
const SearchBar=(props: { filterIcon: boolean ,onInput: (arg1: string) => void}) =>{
    const [text, setText] = useState('');
    const handleOnChange=(e:any)=>{
        setText(e.target.value);
        props.onInput(text);
    }
    return (
        <div>
            <TextField
                value={text}
                onChange={(e)=>handleOnChange}
                placeholder='Search by title or author'
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <Icon src={'search.jpg'}/>
                        </InputAdornment>
                    )
                }}
            >
            </TextField>
        </div>
    );
}

export default SearchBar;