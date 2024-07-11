const express = require('express');
const router = express.Router();
const booksController = require('../controllers/booksController');
const authenticateAuthorize = require('../custom-middlewares/authMiddleware');


// GET all books
// note that the authenticate and authorize middleware are passed as arguments
// the node frameworks allows you to pass as many middleware as you want
router.get('/',  booksController.getBooks);

// GET a specific book by ID
// note that the authenticate and authorize middleware are passed as arguments
// the node frameworks allows you to pass as many middleware as you want
router.get('/:id', booksController.getBookById);

// POST a new book
// note that the authenticate and authorize middleware are passed as arguments
// the node frameworks allows you to pass as many middleware as you want
router.post('/', booksController.createBook);


module.exports = router;
