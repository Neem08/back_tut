const express = require('express');
const app = express()
require('dotenv').config()

app.get('/',(req,res)=>{
   res.send('hello neemisha here');
})

app.get('/twitter',(req,res)=>{
    res.send('neem@gmail.com');
})

app.get('/chai',(req,res)=>{
    res.send('<h1>i need <b> chai </b></h1>');
})
app.listen(process.env.PORT,()=>{
    console.log(` the server is running at port ${3000}` );
})