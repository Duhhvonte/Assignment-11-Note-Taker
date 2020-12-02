const express = require("express");

const fs = require("fs");
const path = require("path");

const dataBase = require('./db/db.json');
const store = require("./db/store");

// Tells node that we are creating an "express" server

var app = express();

// Sets an initial port

var PORT = process.env.PORT || 3030;

// Sets up the Express app to handle data parsing

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(express.static("public"));


// Html & API Routes

require("./routes/apiRoutes")(app, fs);
require("./routes/htmlRoutes")(app);

//Listen for PORT

app.listen(PORT, function() {
    console.log(`App listening on PORT ${PORT}`);
});