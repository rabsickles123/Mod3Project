require('dotenv').config()

const express = require('express')
const app = express()
const cors = require('cors')
const diaryRoutes = require('./routes/diary')
const mongoConfig = require('./config')

const PORT = 5000

// middleware
const jsxEngine = require('jsx-view-engine')
app.engine('jsx', jsxEngine())
app.use(express.json())
app.use(cors())


app.get('/', (req, res) => {
    res.send("Hello World")
})

app.use('/api/diary', diaryRoutes)

app.listen(PORT, () => {
    console.log("Listening on port: " + PORT)
    mongoConfig()
})