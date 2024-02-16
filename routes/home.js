
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    // Logic to render the home page
  return  res.render("home");
});

module.exports = router;
