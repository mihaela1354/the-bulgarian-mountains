const express = require('express');
const controllers = require('../controllers');


const router = express.Router();

router.get('/all', controllers.mountains.getAll);
router.post('/create', controllers.mountains.create);

module.exports = router