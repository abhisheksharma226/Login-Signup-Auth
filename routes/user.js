const express = require("express");
const { handleLogin , handleSignUp , }= require("../controller/user");


const router = express.Router();


router.post("/" , handleSignUp);

router.post("/login" , handleLogin);
// router.post("/" , handleMessages);


module.exports = router;