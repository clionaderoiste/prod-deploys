## The Equis project

Please see [the main Readme for the project statement](../../README.md)

This UI application was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). We have not ejected.  

The project follows a pattern where every build to be deployed will be versioned. 

### Project structure

* `/src` - the source files for the React application  
  * `App.js` - is the main application file
* `/public` - the index file and other public asssests
* `versions` - this is the output folder for versioned builds, each build of a new version will result in a folder being created 
for that build version. E.g. version `1.2.1` would be built and output to `versions/1.2.1`
* `build` - if you runt he standard build command the build will be output here. This folder is gitignored and should not be checked in. 

## Installation 

Run `npm install` and then see commands below for running or building the application.

## Application version

The application version is available via a process variable defined in the `.env` file:

```
REACT_APP_VERSION=$npm_package_version

```

This variable can be referenced in the application itself:

```jsx harmony
<p>This is application version {process.env.REACT_APP_VERSION}</p>
```

The value of the variable is only updated at build time. So if you are running `yarn start`
and you bump the application version you will need to stop and restart the application 
by running `yarn start` again.

See `npm run version-build` below to see how to create a versioned production build. 

## Available Scripts

Note: some scripts are documented using `npm run` rather than `yarn` as that is what was confirmed was working during the 
Hackathon. These commands should work fine with `yarn`.

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.



### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run version-build`

This command is used to created a versioned build of the application. 

It does this by running:
* `yarn bump`: bumps the version of the application using `npm version patch` 
* `yarn build`: runs a standard build that outputs to `/build`
* `yarn move-build`: copies the contents of build to `versions/[npm version number]`

Before you do this you need to make sure that you have no un-commited changes as this will cause the npm version patch 
to fail.

Note: the bump, build and copy steps are deliberately separate commands that are then combined into one. Have them a 
single `&&` command was tried but this led to the build version number being `$npm_version_number` -1.

### `npm run bump`

Bumps the version of the application using `npm version patch` 

### `npm run move-build`

Copies the contents of build to `versions/[npm version number]`

## Running the built version locally

You can serve any of the built versions of the application locally by using `serve`.

To install serve:

```npm
npm install -g serve
```

If you want to run the result of `yarn build`:

```
serve -s build
```

If you want to run a specific build version e.g. `0.0.2`:

```
serve -s versions/0.0.2
```

You will then be able to access the build at `http://localhost:5000`