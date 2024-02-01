const express = require('express')
const mongoose = require('mongoose')
const app = express();
const url = 'mongodb://localhost/node'
mongoose.connect(url,{useNewUrlParser:true})
const con = mongoose.connection

con.on("open",function(){
    console.log("connected......")
})

const alienRouter = require('./routers/index')
app.use('/index', alienRouter)
app.get("/",(req,res)=>{
    res.send("hello world!!");
} );

app.listen(3000 , function(){
    console.log("server started")
})