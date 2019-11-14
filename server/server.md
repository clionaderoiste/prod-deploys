# Server documentation

This is a very simple implementation of an Express.js web server which
able to understand a 'version' query parameter and make a determination
about which version of the site to serve based on this parameter.

Later it will be expanded to use more complicated rules.

# Install and Run

```
npm install
node bin/www
```

# Rules Engine

A very simple rules engine is in place which follows the logic defined here

1. If a version parameter is passed, the user is served this version directly
2. If a username (and only a username) is specified, the users version is looked up
3. If neither is specified, or a version cannot be found in the lookup, serve the 'active' version
