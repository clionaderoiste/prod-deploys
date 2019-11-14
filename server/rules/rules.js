var rules = require("./rules.json");

module.exports = {
  getVersion: function(version, user) {
    console.log(user);
    return version || (rules[user] || "active");
  }
};
