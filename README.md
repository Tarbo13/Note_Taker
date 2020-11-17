# Web Based Note Taker

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
    
## Description
This application allows users to write, save, and delete notes on a web page.  Using the express node package I was able to set up a server that connected the front end files to the back end and deploy the web page on my own server.  I used a combination of get(), post(), and delete() methods to accomplish this. In the index.js file ajax calls were used to handle each one of these methods.  Then, HTML routes were created to handle the get() methods to serve the HTML pages to the server.  My routes are created in two separate .js files (api-routes and html-routes) which are then required on my server.js to bring all of the files together.  This application may be run using node on my local machine, which will then listen to port 8080 to deploy the web page on localhost:8080.  Also the page is deployed using Heroku using the domain listed below.  

## Installation
This application requires the following to be installed: a `package.json` file, `express` node package, and a `body-parser` node package. 

## Usage
Below is a short GIF demonstrating how this application works.  I've also included a link the the deployed web page below.

<img src = "DemoGIF.gif" />

<br>

[Link to Application](https://cryptic-wave-27380.herokuapp.com/)

## Contributors
Ben Robinson

## Testing
npm run test

## License: 

For more information about the license click on the link below. 


[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
    
### Questions: 

![GitHub Logo](GitHub-Mark-32px.png)
[GitHub Profile](https://github.com/Tarbo13)

If you have additional questions please email me **mailto:**<robinson.dri@gmail.com>

### Table of Contents:
- [Description](#Description)
- [Installation](#Installation) 
- [Usage](#Usage)
- [Contributors](#Contributors)
- [Testing](#Testing)
- [License](#License)
- [Questions](#Questions)