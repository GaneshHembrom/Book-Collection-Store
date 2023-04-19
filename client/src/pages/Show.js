import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "./view.css"
const Show=()=>{
    const [user,setuser]=useState({});
    const {id}=useParams();
    useEffect(()=>{
        axios.get(`http://localhost:5000/api/get/${id}`)
        .then((resp)=>setuser({...resp.data[0]}))
    },[id])
    return (
        <div>
            <h1>Book Details</h1>
            <div>
                <strong>ID:</strong>
                <span>{id}</span>
                <br/>
                <strong>Book Name</strong>
                <span>{user.book_name}</span>
                <br/>
                <strong>Author Name</strong>
                <span>{user.author_name}</span>
                <br/>
                <strong>Year of Published</strong>
                <span>{user.year_published}</span>
                <br/>
                <strong>Price</strong>
                <span>{user.price}</span>
                <br/>
                <strong>Discount</strong>
                <span>{user.discount}</span>
                <br/>
                <strong>No of Pages</strong>
                <span>{user.no_of_pages}</span>
                <br/>
                <strong>Book Condition</strong>
                <span>{user.book_condition}</span>
                <br/>
            </div>
            <Link to="/">
                <input type="submit" value="Go Back"></input>
            </Link>
            </div>
    )
}

export default Show;