const express=require('express')
const router=express.Router()
const {people}=require('../data')

router.post('/', (req, res) => {
    const { name } = req.body
    if (name) {
        res.status(200).send(`welcome ${name}`)

    }
    res.status(404).send('please enter name')
})
module.exports=router