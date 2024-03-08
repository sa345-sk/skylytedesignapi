const express = require('express')

const router = express.Router()
//Get request
router.get('/si', (req, res) => {
    res.json({mssg: 'Hello'})
})
//Post request
router.post('/', (req, res) => {
    res.json({mssg: 'Create'})
})
//Delete
router.delete('/:id', (req, res) => {
    res.json({mssg: 'Delete'})
})
module.exports = router;