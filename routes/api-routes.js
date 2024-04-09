const router = require('express').Router()

const { getCollection, ObjectId } = require('../to-do-db')

// GET /api/todos
router.get('/', async (_, response) => {
    const collection = await getCollection('to-do-API', 'to-dos')
	const todos = await collection.find().toArray()
    response.json(todos)
})

// POST /api/todos
router.post('/', async (request, response) => {
	const { item } = request.body
    const collection = await getCollection('to-do-API', 'to-dos')
    const complete = false
    const result = await collection.insertOne({ item, complete })
	response.json(result)
})

// PUT /api/todos/:id
router.put('/:id', async (request, response) => {
    const { id } = request.params
    const collection = await getCollection('to-do-API', 'to-dos')
    const todo = await collection.findOne({ _id: new ObjectId(id) })
    const complete = !todo.complete
    const result = await collection.updateOne({ _id: new ObjectId(id) }, { $set: { complete } })
	response.json(result)
})

module.exports = router