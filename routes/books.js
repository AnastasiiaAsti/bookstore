const express = require('express');
const router = express.Router();
const booksCtrl = require('../controllers/books')

router.get('/', booksCtrl.index);
router.get('/new', booksCtrl.new);
router.get('/:id/edit', booksCtrl.edit);
router.get('/:id', booksCtrl.show);
router.delete(':id', booksCtrl.delete);




module.exports = router;