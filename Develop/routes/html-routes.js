let path = require("path");

module.exports = function(app) {
    
    app.get("/notes", function(req, res) {
        res.sendFile(path.join(__dirname + "/../public/notes.html"));
    });

    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname + "/../public/index.html"));
    });

    app.get("/api/notes", function(req, res) {
        return res.sendFile(path.json(__dirname, "Develop/public/assets/js/index.js"));
    });
}