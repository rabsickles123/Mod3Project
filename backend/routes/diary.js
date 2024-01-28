const express = require('express')
const Diary = require('../models/diaryModel')

const router = express.Router()

// Get all diaries
router.get('/', (req, res) => {
    res.json({mssg: 'Get all diaries'})
})

// Get a single diary entry
router.get('/:id', (req, res) => {
    res.json({mssg: 'Get a single diary entry'})
})

// POST a new diary
router.post('/', async (req, res) => {
    const {title, text} = req.body

    try {
        const diary = await Diary.create({title, text})
        res.status(200).json(diary)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

// Delete a diary entry
router.delete('/:id', (req, res) => {
    res.json({mssg: "Delete a diary entry"})
})

// Update/Edit a diary entry
router.patch('/:id', (req, res) => {
    res.json({ mssg: 'Update diary entry'})
})


module.exports = router