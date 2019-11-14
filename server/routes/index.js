var express = require("express");
var path = require("path");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  let version = req.query.version || "active";
  res.redirect('/'+version);
  // res.sendFile(
  //   path.join(__dirname, "../../ui/equis/versions/" + version + "/index.html"),
  //   function(err) {
  //     res.sendFile(
  //       path.join(__dirname, "../../ui/equis/versions/active/index.html")
  //     );
  //   }
  // );
});

module.exports = router;
