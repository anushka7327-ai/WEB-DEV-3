const express = require("express");
const mongoose = require("mongoose")
const app = express()
const port = 3000;


mongoose.connect().then(()=>{
    console.log("Database connected");
    
}).catch((err)=>{
    console.log(err);
})
app.listen(port,()=>{
    console.log(`server is running on `)
})