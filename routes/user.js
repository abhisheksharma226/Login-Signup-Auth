const express = require("express");
const { handleMessages }= require("../controller/user");


const router = express.Router();


router.get("/" , handleMessages);

// router.post("/" , handleMessages);


module.exports = router;