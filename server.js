require('dotenv').config()
const express = require('express')
const app=express()
const dbconnect=require('./config/db')
const Projects=require('./routes/projectRoute')
app.use(express.json())
const port= process.env.PORT || 7778
app.use('/projects', Projects)
app.get('/',(req,res)=>{
    res.json({message:"vanakam"})
})

app.listen(port,()=>{
    console.log(`server running in : ${port}`)
})