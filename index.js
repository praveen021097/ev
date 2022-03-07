const express = require("express");

const app=express();


app.use(logger);

app.get("/books",logger,(req,res)=>{
   
})

app.get("/libraries",logger,(req,res)=>{
    
})

app.get("/author",logger,(req,res)=>{
    
})

app.listen(9999,()=>{
    console.log("listening port 9999");
})

function logger(req,res,next){
   if(res.path=="/books"){
    return res.send(`route : "${req.path}"`);
   }
   else if(res.path=="/libraries"){
    return res.send(`route : "${req.path}"`)
   }
   else if(res.path=="/author"){
    return res.send(`route : "${req.path}"`)
   }
}



