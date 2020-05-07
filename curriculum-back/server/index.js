const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

const routes = require('./api')
require('../db')

const app = express()
const port = 5000

// middleware
app.use(express.json())
app.use(helmet())
app.use(cors())

app.use('/api/v1', routes)

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
