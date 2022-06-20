import axios from 'axios';
import React, { useEffect, useState } from 'react'

import {
  TextField,
  InputAdornment
} from '@material-ui/core';
import { useUsersPageStyles } from '../../styles/muiStyles';
import SearchIcon from '@material-ui/icons/Search';




export default function Library() {
  const  { query, setQuery } = useState("");
  const { data, setData} = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const res = await axios.get(`https://restcountries.eu/rest/v2/all`);
      setData(res.data);
    };
    fetchBooks()

  }, []);

  const classes = useUsersPageStyles();

  return(
    
    <div className={classes.root}>

      <TextField
        className={classes.filterInput}
        placeholder=" search for books"
        onChange={(e) => setQuery(e.target.value)}
        variant="outlined"
        size="small"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon color="primary" />
            </InputAdornment>
          ),
        }}
      />

      <br/>
    

    </div>
  )
}