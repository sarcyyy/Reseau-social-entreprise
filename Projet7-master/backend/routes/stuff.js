const express = require("express");
const router = express.Router();

// const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config");

const stuffCtrl = require("../controllers/stuff");

router.post("/", stuffCtrl.createThing);
router.put("/:id", multer, stuffCtrl.modifyThing);
router.delete("/:id", multer, stuffCtrl.deleteThing);
router.get("/:id", stuffCtrl.getOneThing);
router.post("/:id/like", stuffCtrl.like);
router.get("/", stuffCtrl.getAllStuff);

module.exports = router;
