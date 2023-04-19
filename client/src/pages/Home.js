import React ,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import { Toast, toast } from "react-toastify";
import axios from "axios";
import "./home.css"
const Home=()=>{
    const [data,setData]=useState([]);
    const loadData=async()=>{
        const response =await axios.get("http://localhost:5000/api/get");
        setData(response.data);
    };
    useEffect(()=>{
        loadData();
    },[]);

    const deletebook=(id)=>{
        console.log(id);
        if(window.confirm("Are you sure you want to delete it")){
        axios.delete(`http://localhost:5000/api/remove/${id}`)
        toast.success(`Book deleted Successfully ${id}`);
        }
        setTimeout(()=>{
            loadData()
        },500)
    }
    return(
        <div>
            <Link to={"/addbook"}>
                <button className="btn btn-add">Add Book</button>
            </Link>

        <table className="styled-table">
            <thead>
                <tr>
                    <th style={{textAlign:"center"}}>No.</th>
                    <th style={{textAlign:"center"}}>Book_Name</th>
                    <th style={{textAlign:"center"}}>Author_Name</th>
                    <th style={{textAlign:"center"}}>Year of Publications</th>
                    <th style={{textAlign:"center"}}>Price</th>
                    <th style={{textAlign:"center"}}>Discount</th>
                    <th style={{textAlign:"center"}}>No_of_Pages</th>
                    <th style={{textAlign:"center"}}>Condition of Book</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item,index)=>{
                    return (
                        <tr key={item.id}>
                            <th scope="row">{index+1}</th>
                            <td>{item.book_name}</td>
                            <td>{item.author_name}</td>
                            <td>{item.year_published}</td>
                            <td>{item.price}</td>
                            <td>{item.discount}</td>
                            <td>{item.no_of_pages}</td>
                            <td>{item.book_condition}</td>
                            <td>
                                <Link to={`/update/${item.id}`}>
                                <button className="btn btn-edit">Edit</button>
                                </Link>
                                <button className="btn btn-edit" onClick={()=>deletebook(item.id)}>Delete</button>
                                <Link to={`/show/${item.id}`}>
                                <button className="btn btn-edit">view</button>
                                </Link>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>

        </div>
    );
}

export default Home;