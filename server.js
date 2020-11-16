


let express = require("express");
let bodyParser = require('body-parser');
let path = require ("path");
// let fs = require ("fs");

let app = express();
let PORT = process.env.PORT || 8080


app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/Develop'));


 
// parse application/json
// app.use(bodyParser.json())




//middleware for assets
 

require("./Develop/routes/api-routes")(app);
require("./Develop/routes/html-routes")(app);

app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT);
});


