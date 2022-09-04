const express = require('express');
const router = express.Router();

 const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

const stuffCtrl = require('../controllers/stuff');


router.post ('/',  multer, auth, stuffCtrl.createThing);
router.put ('/:id',  multer,auth,  stuffCtrl.modifyThing);
router.delete ('/:id',  multer,auth, stuffCtrl.deleteThing);
router.get ('/:id', auth, stuffCtrl.getOneThing);
router.post ('/:id/like', auth,stuffCtrl.like);
router.get ('/',  auth,stuffCtrl.getAllStuff);


module.exports = router;