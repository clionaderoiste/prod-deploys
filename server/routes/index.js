var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  let version = req.query.version || "active";
  res.redirect("/" + version);
});

/** Goto the Login Page */
router.get("/login", function(req, res){
    res.redirect("/login");
});

module.exports = router;
