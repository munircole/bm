import React ,{useState} from "react";
import axios from 'axios';
import { useStateContext } from '../../context/state';
import "./library.css"


import {
  TextField,
} from '@material-ui/core';
import { useUsersPageStyles } from '../../styles/muiStyles';



export default function Library() {
  const {  notify } = useStateContext();


  const classes = useUsersPageStyles();
  const [search, setSearch] = useState("")
  const [books, setBooks] = useState([])
  const apiKey = "AIzaSyBpJSYjedi6VtaARlbyU3LNnuXSpo_1cbE"


 const handleSubmit = (e) => {
    e.preventDefault();

    axios.get("https://www.googleapis.com/books/v1/volumes?q="+search+"&key="+apiKey+"&maxResults=40")           
    .then(data => {
      setBooks(data.data.items);
    }).catch((err) => {
      console.log('FAILED...', err);
      notify('book not found!');

   });



  }


  return(
    
    <div className={classes.root}>
     <form onSubmit={handleSubmit}>
      <TextField
        className={classes.filterInput}
        value = {search}
        onChange= {e=>setSearch(e.target.value)}
        placeholder=" search for books"
        variant="outlined"
        size="small"
        required
      />

      <button type="submit" style={{marginTop: "13px", marginLeft: "5px", background: "green", color:"white", border: "none", borderRadius: "20px", width:"100px", height: "50px"}}>Search</button>
     </form>
      <br/>

      {books && books.map((book, index) => (
        <a key={index} href={book.volumeInfo.previewLink} target="_blank" className="books">
        <img src= {book.volumeInfo.imageLinks?.thumbnail} alt=""/>
        </a>
      ))}
    </div>
  );
}

