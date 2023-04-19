import React, { useEffect, useState } from "react";
import { useNavigate , useParams, Link } from "react-router-dom";
import "./Addedit.css";
// import { Toast } from "react-toastify";
import { toast } from 'react-toastify';
import axios from "axios";
const initialState = {
    book_name: "",
    author_name: "",
    year_published: "",
    price: "",
    discount: "",
    no_of_pages: "",
    book_condition: ""
};
function Addedit() {
    const [state, setState] = useState(initialState);
    const { 
        book_name,
        author_name,
        year_published,
        price,
        discount,
        no_of_pages,
        book_condition } = state;

        // const history=useHistory();
        const navigate = useNavigate();

        const {id}=useParams();
        useEffect(()=>{
            axios.get(`http://localhost:5000/api/get/${id}`).then((resp)=>setState({...resp.data[0]}))
        },[id])

    function handleSubmit(e) {
        e.preventDefault();
        if (!book_name || !author_name || !year_published || !price || !discount || !no_of_pages || !book_condition) {
            toast.error("Please provide value in each field");
            console.log("Please provide value");
        }
        else {
            if(!id){
                axios.post("http://localhost:5000/api/post", {
                book_name,
                author_name,
                year_published,
                price,
                discount,
                no_of_pages,
                book_condition
            })
                .then(() => {
                    setState({
                        book_name: "",
                        author_name: "",
                        year_published: "",
                        price: "",
                        discount: "",
                        no_of_pages: "",
                        book_condition: ""
                    })
                })
                .catch((err) => {
                    console.log(err);
                })
                toast.success("Book Add Successfully");
            }
            else{
                axios.put(`http://localhost:5000/api/update/${id}`, {
                    book_name,
                    author_name,
                    year_published,
                    price,
                    discount,
                    no_of_pages,
                    book_condition
                })
                    .then(() => {
                        setState({
                            book_name: "",
                            author_name: "",
                            year_published: "",
                            price: "",
                            discount: "",
                            no_of_pages: "",
                            book_condition: ""
                        })
                    })
                    .catch((err) => {
                        console.log(err);
                    })
                    toast.success("Book Updated Successfully");
            }
            
                setTimeout(()=>{
                        // history.push("/");
                        navigate('/');
                },500)
        }
    }
    function handleInputChange(e) {
        const { name, value } = e.target;
        setState({ ...state, [name]: value });

    }
    return (
        <div >
            <h1>Add Book Details</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="book_name">Book Name</label>
                <input type="text" name="book_name" placeholder="Book Name" value={book_name || ""} onChange={handleInputChange}></input>
                <br />
                <label htmlFor="author_name">Author Name</label>
                <input type="text" name="author_name" placeholder="Author Name" value={author_name || ""} onChange={handleInputChange}></input>
                <br />
                <label htmlFor="year_published">Year Publications</label>
                <input type="number" name="year_published" placeholder="Year Publications" value={year_published || ""} onChange={handleInputChange}></input>
                <br />
                <label htmlFor="price">Price</label>
                <input type="number" name="price" placeholder="price" value={price || ""} onChange={handleInputChange}></input>
                <br />
                <label htmlFor="discount">Discount</label>
                <input type="number" name="discount" placeholder="Discount" value={discount || ""} onChange={handleInputChange}></input>
                <br />
                <label htmlFor="no_of_pages">No of pages</label>
                <input type="number" name="no_of_pages" placeholder="No of Pages" value={no_of_pages || ""} onChange={handleInputChange}></input>
                <br />
                <label htmlFor="book_condition">Book Condition</label>
                <input type="text" name="book_condition" placeholder="Good" value={book_condition || ""} onChange={handleInputChange}></input>
                <br />
                <input type="submit" value={id ? "Update" : "Save"} />
                <Link to="/">
                    <input type="button" value="Goback"/>
                </Link>
            </form>
        </div>
    )
}

export default Addedit;