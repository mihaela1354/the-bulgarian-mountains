const express = require('express');
const controllers = require('../controllers');

const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, '../bulgarian-mountains-front-end/src/images');
    },
    filename: function(req, file, cb){
        cb(undefined, new Date().toISOString().replace(/:/g, "-") + "_" + file.originalname);
    }
})
  
const upload = multer({storage, limits: {filesize:1024*1024*5}});

const router = express.Router();

router.get('/all', controllers.honored.getAll);
router.get('/:id', controllers.honored.get);
router.post('/create',upload.single('imageUrl'), controllers.honored.create);
router.post('/edit/:id', controllers.honored.edit);
router.delete('/delete/:id', controllers.honored.delete);

module.exports = router