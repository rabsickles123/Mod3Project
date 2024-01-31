const express = require('express')
const diaryController = require('../controllers/diaryController')


const router = express.Router()

// Get all diaries
router.get('/', diaryController.getDiary)

// Get a single diary entry
router.get('/:id', diaryController.getDiaryEntry)

// Create a new diary entry
router.post('/', diaryController.createDiary)

// Delete a diary entry
router.delete('/:id', diaryController.deleteDiaryEntry)

// Update/Edit a diary entry
// router.patch('/:id', diaryController.updateDiaryEntry)

// Edit a diary entry
router.get('/:id/edit', diaryController.editDiary)

// Update diary entry
router.put('/:id', diaryController.updateDiaryEntry)


module.exports = router