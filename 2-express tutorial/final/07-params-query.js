const express = require('express');
const app = express()
const { products, people } = require('./data.js');

app.get('/', (req, res) => {
    res.send('<h1>this is home page</h1><a href="api/products">product</a>')
})
app.get('/api/products', (req, res) => {
    const newproduct = products.map((product) => {
        const { id, name, image } = product;
        return { id, name, image }
    })
    res.json(newproduct)
})
app.get('/api/products/:productID', (req, res) => {
    // console.log(req);
    // console.log(req.params);
    const { productID } = req.params;
    const singleproduct = products.find((product) => product.id === Number(productID))

    if (!singleproduct) {
        res.status(404).send('product Does not exist')
    }

    res.json(singleproduct)
})
app.get('/api/products/:productID/reviews/:reviewsID', (req, res) => {
    console.log(req.params)
    res.send('hello word')
})
app.get('/api/v1/query', (req, res) => {
    // console.log(req.query)
    const { search, limit } = req.query
    let sortedproducts = [...products];

    if (search) {
        sortedproducts = sortedproducts.filter((product) => {
            return product.name.startsWith(search)
        })
    }
    if (limit) {
        sortedproducts = sortedproducts.slice(0, Number(limit))
    }
    if (sortedproducts.length < 1) {
        res.status(200).send('<h1>no product matched your search</h1>')
    }
    res.status(200).json(sortedproducts)
})

app.listen(5000, () => {
    console.log('server listening port no 5000....')
})