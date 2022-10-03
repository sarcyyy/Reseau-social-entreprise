const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config");

const stuffCtrl = require("../controllers/stuff");

router.post("/", auth, multer, stuffCtrl.creerPost);
router.put("/:id", auth, multer, stuffCtrl.modifierPost);
router.delete("/:id", auth, multer, stuffCtrl.supprimerPost);
router.get("/:id", auth, stuffCtrl.recupererPost);
router.post("/:id/like", auth, stuffCtrl.like);
router.get("/", auth, stuffCtrl.recupererAllPost);

module.exports = router;
