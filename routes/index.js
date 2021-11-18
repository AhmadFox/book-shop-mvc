const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Hello World - Anything')
})

module.exports = router