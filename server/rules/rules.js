var rules = require("./rules.json");

module.exports = {
  getVersion: function(version, user) {
    console.log(`Version: ${version}, User: ${user}`);
    return version || (rules[user] || "active");
  }
};
