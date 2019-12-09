# Versioning 

## System

For the hackathon we used semver as our versioning system. This was for convenience as it could be set easily using `npm version`. I would not use semver for a production system as it is too easily guessed by an end user. If they even saw that they were on version `1.12.7` say they might try and navigate to a later version with possibly undesired consequences.

I would reccomend something that is less easy for a user to guess. A guid would work but using commit shas might be handier - this would tie the release versioning directly to the code versioning. 

This could be useful if you need to do a hotfix - you know exactly what commit to checkout from to create a hotfix branch. It may be possible to automate this. 

## Pattern

We copied the built UI application into a folder named with its version name. This again was to keep things simple. 

However, this meant that we had to use a redirect to route users to right version by redirecting them to the versioned folder. This process is transparent to the user and might over-complicate our application routing.

I think changing tack and instead versioning the file names as part of the webpack bundling process would likely work better. E.g. for a version `3ebd2260dff81c934be20c723fd47d5403156d9` name our files `3ebd2260dff81c934be20c723fd47d5403156d9-index.html`, `3ebd2260dff81c934be20c723fd47d5403156d9-app-min.js`, `3ebd2260dff81c934be20c723fd47d5403156d9-main.css`, etc. Then it should be a matter of serving the correct index file version or an index file with links to the correct js and css file versions.

# Routing between versions

For the hackathon we intially were trying to serve the versioned index file directly to the user without any change to the url for the user:

```javascript
res.sendFile(	  res.redirect("/" + version);
    path.join(__dirname, "../../ui/equis/versions/" + version + "/index.html"),	
    function(err) {	
      res.sendFile(	
        path.join(__dirname, "../../ui/equis/versions/active/index.html")	
      );	
    }	
  );
```
However, we ran into an issue with relative paths. The index file would be trying to load a file relative to the route on the server.
```html
<script src="./static/js/main.3ca55cff.chunk.js">
```

* A user would navigate to `https://localhost:8000/`
* We would server them `../../ui/equis/versions/1.7.0/index.html` rather than `./index.html`
* But that index file would look for `./static/js/main.3ca55cff.chunk.js` rather than `../../ui/equis/versions/1.7.0/static/js/main.3ca55cff.chunk.js` so we would see 404s for everything other than the index file.

We solved this for the Hackathon by redirecting the user instead:

```javascript
router.get("/", function(req, res, next) {
  let version = rules.getVersion(req.query.version, req.query.user);
  res.redirect("/" + version);
});
```

This worked fine for the hackathon but meant that it was visible to the user that they were being redirected to another version of the application. It could also have knock on effects for in app routing - either complicating it or introducting a lot of unnecessary redirects and degrading the user experience.

A better solution would to look at how relative routing and files names are handled at bundle time. If your file names were garaunteed to be unique at buid time, e.g. using a commit sha for the file name, you could also ship all files to the one folder. 

# Pull requests

# Rules engine

For the purposes of the Hackathon our 'rules engine' was simply a json file that we manually set the user version numbers for. This could be replaced by any simple data base, e.g. Reddis, that would allow key value pairs or relations along the lines of:

| user/flag | version number |
| ----| ---- |
| "active" | "0.1.7" | 
| "Bob" | "0.1.10" |
| "Cherie" | "0.1.8" |
| "Aidan" | "0.1.6" |

# Storage

We used github as our file system for the purposes of the Hackathon. For a production system a static file service something like Amazon S3 should be used. This would have the knock-on effect of making our UI builds simpler than they are currently.

