var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// set up port to make deployment ready
var PORT = process.env.PORT || 8080;

// bring in modals
var db = require("./models");

// using app variable to run express
var app = express();

// USING THIS FOR APP FROM PUBLIC DIRECTORY
app.use(express.static("public"));

// CONNECT BODY PARSER ELEMENT
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// PARSE BODY AS JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// SET HANDLEBARS
// var exphbs = require("express-handlebars");

// app.set("views", `${__dirname}/views`);
// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");

// GIVE SERVER ACCESS TO ROUTES
require("./routes/api-routes")(app);
require("./routes/html-routes")(app);

// START SEVER TO LISTEN TO CLIENT REQUESTS
app.listen(PORT, function() {
  // LOG WHEN SERVER STARTS
  console.log("Server listening on: http://localhost:" + PORT);
});
