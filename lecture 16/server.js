const express=require("express");
const morgan=require("morgen");
const app=express();
const PORT=3000


app.use(morgan())
// const logMiddleware=(req,res,next)=>{
//     req.name="john doe";
//     console.log("request url:",req.url,"req method:",req.method,
//         "Time:",new Date().toLocaleString());
//         next();
// }


const apicheckMiddleware=(req,res,next)=>{
    if(req.query.API_KEY === "1234")
        console.log("AUTHENTICATED");
        next();


}

// app.use(logMiddleware);
app.use(apicheckMiddleware);

app.get("/",(req,res)=>{
    console.log("request name:",req.name)
    console.log("hello");
    console.log("hello word");
    res.send("hello world");

});


app.get("/data",apicheckMiddleware,(req,res)=>{  //route level middleware
    console.log("hello data");
    res.json({
    city:"new york",
    country:"usa",
    temp:32,
    humidity:80
    })

});
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})