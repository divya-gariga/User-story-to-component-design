import { TextField } from '@mui/material';
import React from 'react';
import Search from '../../../atoms/Search';
function SearchBar(props:{filterIcon:boolean}) {
    return (
        <div>
            <TextField></TextField>
            <Search></Search>
            /**
             {/* filterIcon ?<FilterIcon></FilterIcon>:"" */}
             */
        </div>
    );
}

export default SearchBar;