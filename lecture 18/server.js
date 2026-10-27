// const express=require("express");
// const app=express();
// const port=3000;

// app.get("/age-check/:age",(req,res,next)=>{
//     let age=parseInt(req.params.age);
//      try{
//         if(age<18){
//         throw new Error("you are not eligible to vote");
        
//     }else{
//         res.send("you are eligible to vote")
//     }
//     }catch(error){
//         next(error);
//     }
// })


// app.use((err,req,res,next)=>{ 
//     res.status(500).json({success:false,message:err.message});
// })

// app.use((req,res)=>{
//     res.status(404).json({success:false,message:"Route not found"});
// })


// app.listen(port,()=>console.log("server is running on port 3000"));
const os = require("os");
console.log(os.platform());// linux,win
console.log(os.hostname());