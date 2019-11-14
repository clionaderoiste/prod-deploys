var fs = require("fs");

var rules = require("../../server/rules/rules.json");

var newVersion = process.env.npm_package_version;

rules.versions.push(newVersion);

fs.writeFile(
  "../../server/rules/rules.json",
  JSON.stringify(rules, null, 2),
  err => {
    if (err) throw err;
    console.log(`New version ${newVersion} saved!`);
  }
);
