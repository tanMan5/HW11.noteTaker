const path = require("path");
const db = require("../Develop/db/db.json");
const fs = require("fs");


module.exports = function (app) {
    // GET API requests

    app.get("/api/notes", function (req,res) {
        fs.readFile(path.join(__dirname, "../db/db.json"), "utf8", (err, jsonString) => {
            if (err) {
                return console.log(err)
            }
            res.json(JSON.parse(jsonString));
        })
    });
// should receive the new note and save request to body and then return the new note
    app.post("/api/notes", function (req, res) {
      const note = req.body;

      note.id= Math.random().toString(16).slice(2);
      db.push(note);
      const json = JSON.stringify(db);


        fs.writeFile(path.join(__dirname, "../db/db.json"), noteString, (err) => {
                if (err) {
                    return console.log(err);
                }
                console.log("Success");
            });
            res.json(req.body);
        });



// delete selected note
app.delete("/api/notes/:id", function (req, res) {
   const id = req.params.id;
   for (i = 0; index < db.length; index++) {
       const element = db[index];
       if (element.id === id) {
           db.splice(index, 1);
       };
   };
   const json = JSON.stringify(db);


        fs.writeFile(path.join(___dirname, "../db/db.json"), json, "utf8", (err) => {
            if (err) {
                console.log(err);
            }
    });
    res.json(db);
});

};
