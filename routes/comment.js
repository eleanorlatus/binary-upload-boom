const express = require("express");
const router = express.Router();
const commentController = require("../controllers/comment");

//Post Routes - simplified for now
router.post("/createComment/:id", commentController.createComment);

module.exports = router;