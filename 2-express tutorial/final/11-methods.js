const express = require('express')
const app = express()
let { people } = require('./data')
// static assets
app.use(express.static('./methods-public'))

// parse from data
app.use(express.urlencoded({ extended: false }))

// parse json
app.use(express.json())

app.post('/login', (req, res) => {
    const { name } = req.body
    if (name) {
        res.status(200).send(`welcome ${name}`)

    }
    res.status(404).send('please enter name')
})

app.get('/api/people', (req, res) => {
    res.status(200).json({ sucess: true, data: people })
})


app.post('/api/people', (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ success: false, msg: 'please enter name' })
    }
    res.status(201).json({ success: true, person: name })
})

app.post('/api/postman/people', (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ success: false, msg: 'please enter name' })
    }
    res.status(201).json({ success: true, data: [...people, name] })
})

app.put('/api/postman/:id', (req, res) => {
    const { id } = req.params
    const { name } = req.body

    const person = people.find((person) => person.id === Number(id))
    if (!person) {
        return res.status(404).json({ success: false, msg: `no person with this id${id}` })
    }
    const newpeople = people.map((person) => {
        if (person.id === Number(id)) {
            person.name = name
        }
        return person
    })
    res.status(200).json({ success: true, data: newpeople })
})
app.delete('/api/people/:id', (req, res) => {
    const person = people.find((person) => person.id === Number(req.params.id))
    if (!person) {
        return res.status(404).json({ success:false, msg: `no person with id ${req.params.id}` })
    }
    const newpeople = people.filter((person) => person.id !== Number(req.params.id));
    return res.status(200).json({ success: true, data: newpeople })
})


app.listen(5000, () => {
    console.log('server listening port on 5000...');
})