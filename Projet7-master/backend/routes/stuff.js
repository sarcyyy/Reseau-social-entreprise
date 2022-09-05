const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config");

const stuffCtrl = require("../controllers/stuff");

router.post("/", stuffCtrl.createThing);
router.put("/:id", auth, multer, stuffCtrl.modifyThing);
router.delete("/:id", auth, multer, stuffCtrl.deleteThing);
router.get("/:id", auth, stuffCtrl.getOneThing);
router.post("/:id/like", auth, stuffCtrl.like);
router.get("/", auth, stuffCtrl.getAllStuff);

module.exports = router;
