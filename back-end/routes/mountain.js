const express = require('express');
const controllers = require('../controllers');

const router = express.Router();

router.get('/all', controllers.mountains.getAll);
router.get('/:id', controllers.mountains.get);
router.post('/create', controllers.mountains.create);
router.delete('/:id',controllers.mountains.delete);
router.post('/:id',controllers.mountains.edit);

module.exports = router