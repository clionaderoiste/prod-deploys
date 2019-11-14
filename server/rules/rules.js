var rules = require("./rules.json");

module.exports = {
  getVersion: function(user) {
    console.log(user);
    return rules[user] || "active";
  }
};
