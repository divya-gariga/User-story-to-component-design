import React from 'react';
import { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core';
import axios from 'axios';
import { valueToPercent } from '@mui/base';
import { getSearchResults } from '../../../utils/filter';
import SearchDropdown from '../SearchDropdown/SearchDropdown';

const useStyles = makeStyles({
    container: {
        position: 'fixed',
        left: '0',
        right: '0',
        top: '89px',
        bottom: '0',
        backgroundColor: 'rgba(0,0,0,.7)',
        height: "100%",
        width: 'auto',
        overflow: "hidden",
        display: 'block',
        zIndex: 998,
        justifyContent: 'center',
    },
})

function Modal(props: { open: any; DropDownComponent: any; searchTerm: string }) {

    const { open, DropDownComponent, searchTerm } = props;
    const [blinksInfo, setBlinksInfo] = useState([]);
    const [searchResults, setSearchResults] = useState<any[]>([]);
    let value: string;
    let searchOutput = [{}];
    const classes = useStyles();
    async function getBookInfo() {
        await axios
            .get("http://localhost:8000/BooksInfo")
            .then((response) => {
                const data = response.data;
                setBlinksInfo(data);
            })
    }
    useEffect(() => {
        getBookInfo();
    }, []);

    useEffect(() => {
        setSearchResults(getSearchResults(searchTerm, blinksInfo));
    }, [searchTerm])
    if (open === true) {
        return (
            <div className={classes.container} data-testid="explore">
                <DropDownComponent items={searchResults}/>
            </div>
        )
    }
    else {
        return null
    }
}

export default Modal;