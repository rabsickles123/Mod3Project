const express = require('express')
const diaryController = require('../controllers/diaryController')


const router = express.Router()

// Get all diaries
router.get('/', diaryController.getDiary)

// Get a single diary entry
router.get('/:id', diaryController.getDiaryEntry)

// POST a new diary
router.post('/', diaryController.createDiary)

// Delete a diary entry
router.delete('/:id', diaryController.deleteDiaryEntry)

// Update/Edit a diary entry
router.patch('/:id', diaryController.updateDiaryEntry)


module.exports = router