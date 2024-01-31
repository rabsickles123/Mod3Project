const Diary = require('../models/diaryModel')
const mongoose = require('mongoose')

// get all diaries
const getDiary = async (req, res) => {
    const diary = await Diary.find({}).sort({createdAt: -1})
    res.status(200).json(diary)
}

// get a single diary
const getDiaryEntry = async (req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such diary entry"})
    }

    const diary = await Diary.findById(id)
    if (!diary) {
        return res.status(404).json({error: 'No such diary entry'})
    }

    res.status(200).json(diary)
}

// create a new diary
const createDiary = async (req, res) => {
    const {title, text} = req.body
    console.log(req.body, ":reqbody")

    // add doc to db
    try {
        const diary = await Diary.create({title, text})
        res.status(200).json(diary)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// delete a diary entry
const deleteDiaryEntry = async (req, res) => {
    try {
        const diary = await Diary.findByIdAndDelete({ _id: req.params.id })
        res.json({ message: "Diary successfully deleted"})
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}

// update a diary
const updateDiaryEntry = async (req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such diary entry"})
    }

    const diary = await Diary.findOneAndUpdate({_id: id}, {
        ...req.body
    })
    
    if (!diary) {
        return res.status(404).json({error: 'No such diary entry'})
    }

    res.status(200).json(diary)
}

module.exports = {
    getDiary,
    createDiary,
    getDiaryEntry,
    deleteDiaryEntry,
    updateDiaryEntry 
}