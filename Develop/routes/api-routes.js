
let fs = require("fs");
let path = require("path");




module.exports = function (app) {   
    const notesDB = fs.readFileSync("./Develop/db/db.json");
    let notes = JSON.parse(notesDB);
    

    app.get("/api/notes", (req, res) => {
        
        return res.send(notes);
        
    });
    
    app.post("/api/notes", function(req, res) {
        // console.log(res);
        console.log(req.body);
        // console.log(req)
        let newNote = req.body;
        console.log(newNote);
        newNote["id"] = newNote.title + notes.length;
        notes.push(newNote);
        fs.writeFileSync("./Develop/db/db.json", JSON.stringify(notes));
        return res.json(newNote);
    });

    app.delete("/api/notes/:id", function(req, res) {
        console.log(req.params.id);
        let deleteNote = req.params.id;
        console.log(deleteNote);
        for (let i = 0; i < notes.length; i++){
            if(notes[i].id == deleteNote) {
                notes.splice(i, 1);
            }
        }
        fs.writeFileSync("./Develop/db/db.json", JSON.stringify(notes));
        console.log(notes);
        return res.json(notes);
    })
   
}