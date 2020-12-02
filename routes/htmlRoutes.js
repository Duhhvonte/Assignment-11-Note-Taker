<<<<<<< HEAD
const { dirname } = require("path");
const path = require("path");


module.exports = function(app) {
    // HTML GET Requests
  
    app.get("/notes", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });
    
    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
    
=======
const { dirname } = require("path");
const path = require("path");


module.exports = function(app) {
    // HTML GET Requests
  
    app.get("/notes", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });
    
    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
    
>>>>>>> da425016f85fb5372ece4072c3d110756077a65d
};