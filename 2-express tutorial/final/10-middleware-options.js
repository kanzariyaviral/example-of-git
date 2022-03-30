const express= require('express')
const app=express()
const morgan=require('morgan')
const logger=require('./logger')
const authorize=require('./authorize')
// req => middleware => res
// app.use([logger,authorize])
app.use(morgan('tiny'))

app.get('/',(req,res)=>{

    res.send('home page')

})
app.get('/about',(req,res)=>{
    res.send('about')
})
app.get('/api/product',(req,res)=>{
    res.send('product')
})
app.get('/api/items',(req,res)=>{
    console.log(req.user)
    res.send('items')
})

app.listen(5000,()=>{
    console.log('server listening port on 5000...')
})