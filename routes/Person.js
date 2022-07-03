const router = require('express').Router()
const { getAllPeople, getPersonById, createPerson, deletePersonById } = require('../controllers/Person')

router.get('/all', getAllPeople)
router.get('/:id', getPersonById)
router.post('/', createPerson)
router.delete('/:id', deletePersonById)

module.exports = router