require('dotenv').config()

const express = require('express')
const app = express()
const cors = require('cors')

const PORT = 5000

const jsxEngine = require('jsx-view-engine')
app.engine('jsx', jsxEngine())

const mongoConfig = require('./config')

app.use(cors())

app.get('/', (req, res) => {
    res.send("Hello World")
})

app.get('/api/test', (req, res) => {
    console.log('test')
    res.json('Server says: Hello Client!')
})

app.listen(PORT, () => {
    console.log("Listening on port: " + PORT)
    mongoConfig()
})