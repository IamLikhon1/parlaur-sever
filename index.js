const express = require('express');
const cors = require('cors');
const app=express()
require('dotenv').config()
const port=process.env.PORT||5000;

const service=require('./service.json')
const testimonial=require('./testimonial.json')


app.use(cors())
app.use(express.json());





app.get('/testimonial',(req,res)=>{
    res.send(testimonial)
})

app.get("/service",(req,res)=>{
    res.send(service)
})

app.get('/',(req,res)=>{
    res.send('Parlour is running')
})

app.listen(port,()=>{
    console.log(`parlour is running on port: ${port}`)
})