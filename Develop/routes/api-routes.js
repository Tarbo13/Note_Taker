
let fs = require("fs");
let path = require("path");




module.exports = function (app) {   
    const notesDB = fs.readFileSync("./Develop/db/db.json");
    let notes = JSON.parse(notesDB);
    

    app.get("/api/notes", (req, res) => {
        return res.send(notes);
    });
    
    app.post("/api/notes", (req, res) => {
        let newNote = req.body;
        newNote["id"] = newNote.title + notes.length;
        notes.push(newNote);
        fs.writeFileSync("./Develop/db/db.json", JSON.stringify(notes));
        return res.json(newNote);
    });

    app.delete("/api/notes/:id", (req, res) => {
        let deleteId = req.params.id;
        console.log(deleteId);
        for (let i = 0; i < notes.length; i++){
            if(notes[i].id == deleteId) {
                notes.splice(i, 1);
            }
        }
        fs.writeFileSync("./Develop/db/db.json", JSON.stringify(notes));
        return res.json(notes);
    })
   
}