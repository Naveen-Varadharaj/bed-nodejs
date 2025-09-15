const express = require("express");
const router = express.Router();
const { getUsers, createUser } = require("../controllers/userControllers");

// GET all users
router.get("/", getUsers);

// POST a new user
router.post("/", createUser);

module.exports = router;
