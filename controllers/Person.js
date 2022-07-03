const Person = require('../models/Person')

const getAllPeople = async (req, res) => {
    try {
        const people = await Person.find()
        res.json(people)
    } catch (err) {
        console.log(err)
        res.status(500).json({ 'message': 'error getting all users'})
    }
}

const getPersonById = async (req, res) => {
    try {
        const { id } = req.params
        const person = await Person.findById(id)
        res.json(person)
    } catch (err) {
        console.log(err)
        res.status(500).json({ 'message': 'error getting person'})
    }
}

const createPerson = async (req, res) => {
    try {
        await Person.create(req.body)
        res.status(201).json({ "message": "user created"})
    } catch (err) {
        console.log(err)
        res.status(500).json({ 'message': 'error creating person'})
    }
}

const deletePersonById = async (req, res) => {
    try {
        const { id } = req.params
        await Person.findByIdAndDelete(id)
        res.json({'message': 'person deleted'})
    } catch (err) {
        console.log(err)
        res.status(500).json({ 'message': 'error deleting person'})
    }
}


module.exports = { 
    getAllPeople,
    getPersonById,
    createPerson,
    deletePersonById
 }