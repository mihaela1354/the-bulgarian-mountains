const express = require('express');
const controllers = require('../controllers');


const router = express.Router();

router.get('/all', controllers.mountains.getAll);

module.exports = router