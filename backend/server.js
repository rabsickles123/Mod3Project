require('dotenv').config()

const express = require('express')
const app = express()

const PORT = 5000

const jsxEngine = require('jsx-view-engine')
app.engine('jsx', jsxEngine())

const mongoConfig = require('./config')

app.get('/', (req, res) => {
    res.send("Hello World")
})


app.listen(PORT, () => {
    console.log("Listening on port: " + PORT, process.env.MONGO_URL)
    mongoConfig()
})