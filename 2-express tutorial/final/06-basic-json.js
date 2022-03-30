const express = require('express')
const app=express()
const {products,people}=require('./data.js')


app.get('/',(req,res)=>{
    res.json(products);
})
app.get('/about',(req,res)=>{
    res.json(people);
})
app.listen(5000,()=>{
    console.log('listen porn number 5000...');
})

