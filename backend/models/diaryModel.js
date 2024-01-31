const mongoose = require('mongoose')

const Schema = mongoose.Schema

const diarySchema = new Schema({
    title: { type: String, required: true },
    text: { type: String, required: true },
    // user_id: { type: String, required: true}
}, { timestamps: true })

const Diary = mongoose.model('Diary', diarySchema)

module.exports = Diary
