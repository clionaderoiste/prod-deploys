# Login in documentation
The Login Application contains a simple Webpage showing the list of actors/users
that play specific role in the Equis project.
The webpage shows:
* Avatar of the User
* Name of the User
* Role played by the user
* The button to navigate to the specific version of the application
 the user is authorised to access.

## Project structure
* `login` - The root directory for users list web application.
* `index.html` - The webpage showing the display.
* `css` - The directory containing the CSS files referred in `index.html` page.
* `images` - The directory containing any relevant images used in `index.html`.
* `js` - The directory containing javascript files and relevant data about users

## Accesssing the Login Page
* The login web-application can be accessed directly by opening the `index.html` file in browser.  

Accessing the file from server requires following steps:
1. Installing the dependencies:

        npm install
2. Start the Server

        npm start
3. Access the Login from browser at the link:
        
        http://localhost:8000/login/

### Adding the new users
* New users can be added directly in the JSON file present at `login/js/data.json`
* The structure of JSON is like:
    ```
  {
    "users":
        [
            {
                "username": "NAME OF THE USER",
                "link": "LINK OF BUILD VERSION",
                "avatar": "PATH_TO_IMAGE",
                "about":"ABOUT THE USER"
            }
        ]
  }
  ```