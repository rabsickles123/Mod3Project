const mongoose = require('mongoose')

const Schema = mongoose.Schema

const someSchema = new Schema({
    text: { type: String },
    completed: { type: Boolean}
})

const Some = mongoose.model('some', someSchema)

module.exports = Some
