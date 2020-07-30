const express = require('express');
const controllers = require('../controllers');


const router = express.Router();

router.get('/all', controllers.honored.getAll);
router.get('/:id', controllers.honored.get);
router.post('/create', controllers.honored.create);
router.post('/edit/:id', controllers.honored.edit);
router.delete('/delete/:id', controllers.honored.delete);

module.exports = router