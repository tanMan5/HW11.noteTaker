// // Needs to include correct path package to get correct file path for the html

const path = require("path");

module.exports = function (app) {

    // GET REQUEST HTML
    // USER HTML 

    
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });


    app.get("/notes", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });
};

