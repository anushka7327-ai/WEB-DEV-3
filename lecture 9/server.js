const express = require("express")
const app = express();
const PORT = 3000

const users = [
    {id:101 , name:"Alex" ,email:"adhwkle#@133"},
    {id:102 , name:"Rahul" ,email:"adhwkle#@134"},
    {id:103 , name:"Paru" ,email:"adhwkle#@13353"},
    {id:104 , name:"Kashu" ,email:"adhwkle#@1334"},
]


app.get("/",(req,res)=>{
    res.send("hello students");
})

app.get("about",(req,res)=>{
    res.send("<h1>hello from about</h1>");
})

app.get("users",(req,res)=>{
    res.send("users");
})
app.listen(3000,()=>{
    console.log("server is running on port 3000");
});