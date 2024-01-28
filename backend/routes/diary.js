const express = require('express')

const router = express.Router()

// Get all diaries
router.get('/diary', (req, res) => {
    res.json({mssg: 'Get all diaries'})
})

// Get a single diary entry
router.get('/diary/:id', (req, res) => {
    res.json({mssg: 'Get a single diary entry'})
})

// POST a new diary
router.post('/diary', (req, res) => {
    res.json({mssg: "POST a new diary entry"})
})

// Delete a diary entry
router.delete('/diary/:id', (req, res) => {
    res.json({mssg: "Delete a diary entry"})
})

// Update/Edit a diary entry
router.patch('/:id', (req, res) => {
    res.json({ mssg: 'Update diary entry'})
})


module.exports = router