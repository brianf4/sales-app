const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const postsController = require("../controllers/posts");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Post Routes - simplified for now
router.get("/", ensureAuth, postsController.getPost);

router.post("/createPost", upload.single("file"), postsController.createPost);

router.put("/increment/:id", postsController.increment);

router.put("/decrement/:id", postsController.decrement);

router.delete("/deletePost/:id", postsController.deletePost);

router.delete("/deleteinventory/:id", postsController.deleteInventory);

module.exports = router;
