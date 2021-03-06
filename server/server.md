# Server documentation

This is a very simple implementation of an Express.js web server which
able to understand a 'version' query parameter and make a determination
about which version of the site to serve based on this parameter.

Later it will be expanded to use more complicated rules.

# Install and Run

Install

```
npm install
node bin/www
```

# Rules Engine

A very simple rules engine is in place which follows the logic defined here

1. If a version parameter is passed, the user is served this version directly
2. If a username (and only a username) is specified, the users version is looked up
3. If neither is specified, or a version cannot be found in the lookup, serve the 'active' version

# To serve:

```
npm start
```

A server will load at https://localhost:8000

It should default to the active version.

If you want to go to a specific version you need to pass the version as a route param e.g. https://localhost:8000?version=0.1.6

Please do not use any version before 0.1.6 as they had bugs!

If you version is not found it should default to the active version.
