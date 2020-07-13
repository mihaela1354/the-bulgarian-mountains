const express = require('express');
const controllers = require('../controllers');
const routes = require('.');


const router = express.Router();

router.post('/register',controllers.user.register);
router.post('/login', controllers.user.login);
router.post('/logout',controllers.user.logout)

module.exports = router