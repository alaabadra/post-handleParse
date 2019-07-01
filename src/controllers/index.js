const express = require("express");
const router = express.Router();

const error = require("./error.js");
const home = require("./home.js");
const profile = require("./profile.js");
const signin = require("./signin.js");
const signup = require("./signup.js");
const addPost = require("./addPost.js");
const deleteCookie = require("./deleteCookie.js");

router.get("/", home.get);
router.get("/profile", profile.get);
router.get("/signup", signup.get);
router.get("/signin", signin.get);
router.get("/delete-cookie", deleteCookie.get);
router.post("/signup", signup.post);
router.post("/signin", signin.post);
router.post("/add-post", addPost.post);

router.use(error.client);
router.use(error.server);

module.exports = router;
