import { Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import "./style.css";
function SearchDropdown(props: { items: any[] }) {
    const { items } = props;
    const [listItems, setListItems] = useState<any[]>([]);
    useEffect(() => {
        setListItems(items);
    }, [])
  
    return (
        <div className='container'>
            <ul className='search-result-dropdown'>
                {console.log("list size: ", items.length)}
                {items.map((book: any) => {
                  return  (
                    <a href={`/Entrepreneurship/${book["id"]}`} className='link'>
                    <li key={book["id"]} className='search-result-item'>
                        <Typography variant="body1" component="span" className='book-title'>{book["title"]} </Typography>
                        <Typography variant="caption" component="span"> by {book["author"]}</Typography>
                    </li>
                    </a>
                    )
                }
                )}
            </ul>
        </div>
    );
}

export default SearchDropdown;