var rules = require("./rules.json");

var getActiveVersion = function() {
  return rules.versions[rules.versions.length - 1];
};

var getVersion = function(version, user) {
  if (version) {
    if (rules.versions.indexOf(version) >= 0) {
      console.log({ user, targettedVersion: version });
      return version;
    }

    console.error({ user, targettedVersion: version, notFound: true });
  }

  const userVersion = rules.users[user];
  if (userVersion) {
    console.log({ user, userVersion });

    return userVersion;
  }

  const activeVersion = getActiveVersion();
  console.log({ user, activeVersion });

  return activeVersion;
};

module.exports = {
  getActiveVersion,
  getVersion
};
