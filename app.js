
const express = require('express')
const app = express()

const port = process.env.PORT || 3000

// Middleware
app.use(express.json())
app.use(express.static('public'))
app.use('/api/todos', require('./routes/api-routes'))
app.use(require('./routes/static'))

//const todos = [
//	{ id: 1, item: 'Learn JavaScript', complete: false },
//	{ id: 2, item: 'Learn Express', complete: false },
//	{ id: 3, item: 'Build a To Do App', complete: false }
//]

const message = `Server running: http://localhost:${port}`
app.listen(port, () => console.log(message))

