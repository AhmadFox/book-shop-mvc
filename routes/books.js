const express = require('express')
const router = express.Router()
const Book = require('../models/book')

// All Books Routes
router.get('/', async (req, res) => {
    try {
        const books = await Book.find({})
        res.render('books/index', { 
            books: books
        })
    } catch {
        res.redirect('/')
    }
})

// New Book Route
router.get('/new', (req, res) => {
    res.render('books/new')
})

module.exports = router