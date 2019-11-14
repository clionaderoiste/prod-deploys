# The Dos Equis Project Hackathon 

## The project

### Problem statement:
Releasing new code to our customers is a slow process. Currently we have 3 environments (including 2 staging environments) 
that are on our path to Production. These staging environments have high contention and are less stable.
Our proposal is to look at separating deployment and release.

Note: there is a team that will tackle this but we feel it would be interesting to see how multiple teams might tackle it

#### Expanded problem statement: 
Currently UI applications have to be built and then deployed through 3 environments, two staging environments and then to 
production. Testing in complicated by staging environments being less stable than production resulting in test failures 
due to service degradation, outage or errors. These add considerable time to our build and deploy procedures. 

UI applications generally only need to be built once. UI performance testing does not require a deployed scaled environment.
Functional testing against production services would be more stable.  

We propose to separate the deployment and release process. All versions on the UI application would be deployed to 
production, testing could then be done post deployment against production services and infrastructure. Once we were happy 
with a version of the UI application it could be tagged as the live version and users could be directed to it. 

We have some diagrams that describe the rough user flow and iterative architectures. The diagrams are available [here](https://www.lucidchart.com/invitations/accept/d1cc8c97-3e2f-4d94-ba37-91add859ff16) on Lucid Chart.

[![Version one of the Dos Equis Architecture](./images/DosEquisArchitecture01.png)](./images/DosEquisArchitecture01.png)

[![Version two of the Dos Equis Architecture](./images/DosEquisArchitecture02.png)](./images/DosEquisArchitecture02.png)

[![Version three of the Dos Equis Architecture](./images/DosEquisArchitecture03.png)](./images/DosEquisArchitecture03.png)

### Open Questions: 
How do we handle merges? 
How do we not accidentally delete useful code from version 124 - 126?

### Non technical/hackathon questions: 
Would we need to deploy the UI to other environments to satisfy other stakeholders. We would need to be able to run tests 
in parallel. We would need to be able to setup and clean down testing data so as not to bloat prod servers (we do this now)

### Notes:
For demos and locked sites, this could be utilised to test against certain versions and allow engineering to continue to 
release either to other customers or for testing
CSI/issue resolution - specific fixes could be tested by support and/or customers before deploying
Product/design review

## Technical information

A UI application was created using React. This application is given a different version at build time - for the Hackathon, we used npm scripts to apply semver to the app and store it in a versioned build folder.  Versioning using semver is not sufficiently safe for a production environment, using something more opaque like a guid or commit hashes would be better.  

We used Git as our file system, but any scalable static serve file system could be used for a production system, e.g. S3. 

We also created a simple login application and some user personas.  

A NodeJS server was built to handle routing. If a specific version of the application has been requested the server redirects the user to that version. If a version is not passed, the server looks the user up in a simple rules engine to see if they should be directed to a specific version. If no rule for that user is found, they are redirected to the current version. 

For the Hackathon, we used a simple JSON file located on the server as our 'database'. For a production system, this would need to be changed to a robust database.

We believe it would be practical to implement this for the future. It would necessitate changing how we build and deploy UI applications. The service or application used to route users would have to be extremely performant - perhaps something like a gateway could be used? Features would need to be implemented to automate deployments and rollback procedures. 

We have an open question as to how we would manage to version with a large team of UI engineers, but we believe this to be solvable. 

Considerations would have to be given to usages of the INT and Cert environments by other stakeholders.

### How to run the application

To run the application using one of the pre-built UI applications:
* Clone this repo
* Install the Node server
  ``` 
  cd server
  npm install
  ```
* Run the Node server
  ```
  npm start
  ```
* Open the login page in your browser `http://localhost:8000/login/`
* Choose you persona - you should be redirected a version of the UI application.

If you want to buid your own version of the application see the Equis section below.
If you want to add personas please see the Login section below

### Server

* A NodeJS webserver is used to route between application versions, more details can be found [here](./server/server.md)

### UI

* Equis
  * A basic application made using create react app that supports deploying multiple version fo the application
  * See [/equis](./ui/equis/README.md) for more information
* Login - A basic login in application was created using HTML and jQuery. More information can be found [here](./ui/userslist/login.md) 

## Ways of working

We are using a project board on this repo to track issues, you can access it [here](https://scm.eng.hmhco.com/deroistec/dos-equis-project/projects/1)

### Norms

* We will keep a phone line open in Dublin so people can drop in and out. We will try Webex first and fall back to 
something else if it doesn’t work.
* We will over communicate online so as to ensure those not in the room are kept in the loop.
* We will document in the code base - i.e. md files along side code.
* We will use the project board in this github repo for planning and issue tracking. See above.
* We will branches and PRs just so we don’t get in each others way.

