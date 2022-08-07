const { application } = require('express');
const express=require('express')
const app=express()
require("dotenv").config();
const path = require("path")
const PORT=process.env.PORT||3000;
app.set('views',path.join(__dirname, '/views'))
app.set('view engine','ejs')
app.use(express.json());
app.use(express.static('public'))
app.use(express.urlencoded({extended:false}))
// routes
app.use('/api/files',require('./routes/files'))
app.use('/files',require('./routes/show'))
app.use('/files/download',require('./routes/download'))
const connectDB=require("./config/db");
connectDB();

app.listen(PORT,()=>{
    console.log('Listening');
})

