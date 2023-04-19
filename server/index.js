const express=require("express");
const bodyparser=require("body-parser");
const cors=require("cors");
const mysql=require("mysql2");
const app=express();

app.use(cors());
app.use(express.json());
app.use(bodyparser.urlencoded({extended:true}));

const db=mysql.createPool({
    host:"localhost",
    user:"root",
    password:"hembrom",
    database:"comic"
});

app.get("/api/get",(req,res)=>{
    const sqlGet="SELECT * FROM comicbook";
    db.query(sqlGet,(err,result)=>{
        res.send(result);
    })
})

app.post("/api/post",(req,res)=>{
    var {id,book_name, author_name, year_published, price, discount, no_of_pages,book_condition }=req.body;
    const sqlInsert="INSERT INTO comicbook (id,book_name, author_name, year_published, price, discount, no_of_pages,book_condition) VALUES(?,?,?,?,?,?,?,?)";
    db.query(sqlInsert,[id,book_name, author_name, year_published, price, discount, no_of_pages,book_condition],(err,result)=>{
        console.log(err);
        console.log(result);
       
    })
})

app.delete("/api/remove/:id",(req,res)=>{
    const {id}=req.params;
    console.log(id);
   const sqlRemove="DELETE FROM comicbook WHERE id=?";
   db.query(sqlRemove,[id],(err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log(result);
    }
   })
})

app.get("/api/get/:id",(req,res)=>{
    const {id}=req.params;
    const sqlGet="SELECT * FROM comicbook WHERE id=?";
    db.query(sqlGet,id,(err,result)=>{
        if(err){
            console.log(err);
        }
        res.send(result);
    })
})

app.put("/api/update/:id",(req,res)=>{
    const {id}=req.params;
    var {book_name, author_name, year_published, price, discount, no_of_pages,book_condition }=req.body;
    
    const sqlUpdate="UPDATE comicbook SET book_name=?, author_name = ?, year_published = ?, price = ?, discount = ?, no_of_pages = ?,book_condition = ? WHERE id = ?"
    db.query(sqlUpdate,[book_name, author_name, year_published, price, discount, no_of_pages,book_condition,id],(err,result)=>{
        if(err){
            console.log(err);
        }
        res.send(result);
    })
})

app.get("/",(req,res)=>{
    // const sqlInsert="INSERT INTO comicbook VALUES(1,'The Midnight Library','Matt Haig','2020',1500,15,384,'good')"
    // db.query(sqlInsert,(err,result)=>{
    //     console.log(err);
    //     console.log(result);
    //     res.send("Hello");
    // })
    
})

app.listen(5000,()=>{
    console.log("Server is running on port 5000...");
})