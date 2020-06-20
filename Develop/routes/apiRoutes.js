const path = require("path");
const db = require("../db/db.json");
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
        fs.readFile(path.join(__dirname, "../db/db.json"), "utf8", (err, jsonString) => {
            if (err) {
                return console.log(err)
            }
            const note = req.body;
            const noteList = (JSON.parse(jsonString));

            const id = noteList[noteList.length-1].id + 1;
            note.id = id;
            const noteString = JSON.stringify(noteList);
            fs.writeFile(path.join(__dirname, "../db/db.json"), noteString, (err) => {
                if (err) {
                    return console.log(err);
                }
                console.log("Success");
            });
        })

});

// delete selected note
app.delete("/api/notes/:id", function (req, res) {
    fs.readFile(path.join(___dirname, "../db/db.json"), (err, jsonString) => {
        if (err) {
            return console.log(err);
        }
        const noteList = (JSON.parse(jsonString));
        const newNoteList = [];
        for (i = 0; i < noteList.length; i++) {
            if (noteList[i].id != req.params.id) {
                newNoteList.push(noteList[i]);
            };
        };
        const noteString = JSON.stringify(newNoteList);
        fs.writeFileSync(path.join(___dirname, "../db/db.json"), noteString);
    });
});

}
