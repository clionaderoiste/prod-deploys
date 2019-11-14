var express = require("express");
var router = express.Router();
var rules = require("../rules/rules");

/* GET home page. */
router.get("/", function(req, res, next) {
  let version = rules.getVersion(version, user);
  res.redirect("/" + version);
});

module.exports = router;
