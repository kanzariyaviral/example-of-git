const {people} =require('../data')

const getPeople =(req, res) => {
    res.status(200).json({ sucess: true, data: people })
}
const createPeople =(req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ success: false, msg: 'please enter name' })
    }
    res.status(201).json({ success: true, person: name })
}
const createPeoplePostman=(req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ success: false, msg: 'please enter name' })
    }
    res.status(201).json({ success: true, data: [...people, name] })
}
const updatePeople =(req, res) => {
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
}
const deletePeople= (req, res) => {
    const person = people.find((person) => person.id === Number(req.params.id))
    if (!person) {
        return res.status(404).json({ success:false, msg: `no person with id ${req.params.id}` })
    }
    const newpeople = people.filter((person) => person.id !== Number(req.params.id));
    return res.status(200).json({ success: true, data: newpeople })
}

module.exports={
    getPeople,
    createPeople,
    createPeoplePostman,
    updatePeople,
    deletePeople
}