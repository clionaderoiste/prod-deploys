var express = require("express");
var router = express.Router();
var rules = require("../rules/rules");

/* GET home page. */
router.get("/", function(req, res, next) {
  let version = rules.getVersion(req.query.version, req.query.user);
  res.redirect("/" + version);
});

/** Goto the Login Page */
router.get("/login", function(req, res){
    res.redirect("/login");
});

module.exports = router;
