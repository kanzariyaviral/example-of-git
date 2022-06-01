const express =require('express')
const router =express.Router()



const {
    getPeople,
    createPeople,
    createPeoplePostman,
    updatePeople,
    deletePeople
} =require('../controller/people')

// router.get('/',getpeople )
// router.post('/',createpeople )
// router.post('/postman', createpeoplepostman)
// router.put('/:id', updatepeople)
// router.delete('/:id',deletepeople)

router.route('/').get(getPeople).post(createPeople)
router.route('/postman').post(createPeoplePostman)
router.route('/:id').put(updatePeople).delete(deletePeople)


 module.exports =router