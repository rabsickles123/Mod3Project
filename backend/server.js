require('dotenv').config()

const express = require('express')
const app = express()
const cors = require('cors')
const diaryRoutes = require('./routes/diary')
const authRoutes = require('./routes/authRoutes')
const userRoutes = require('./routes/userRoutes')
const mongoConfig = require('./config')

const { authorize } = require('./middleware/authMiddleware')

const PORT = 5000

// middleware
app.use(express.json())
app.use(cors())


app.get('/', (req, res) => {
    res.send("Hello World")
})

app.use('/api/diary', diaryRoutes)
app.use('/auth', authRoutes)
app.use('/api/users', authorize, userRoutes)

app.listen(PORT, () => {
    console.log("Listening on port: " + PORT)
    mongoConfig()
})