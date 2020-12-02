var path = require("path");

module.exports = function (app, fs) {
  
  const db = require("../db/db.json");

  let databaseFile = path.join(__dirname, "../db/db.json");

  // Retrieve api notes
  app.get("/api/notes", function (req, res) {
    
    res.json(db);
  
  });

  // Posting and Creating notes
  app.post("/api/notes", function (req, res) {
    
    let newNote = req.body;
    
    // Establishing a user ID
    let id = 1;

    for (let i = 0; i < db.length; i++) {
    
      let note = db[i];

      if (note.id > id) {
     
        id = note.id;
     
      }
    }

    // Assigning the new note the newest ID
    newNote.id = id + 1;
    
    // Pushing the new note into the db.json
    db.push(newNote);
    
    // Letting user know in the console that the note saved 
    fs.writeFile(databaseFile, JSON.stringify(db), function (err) {
      if (err) {
        return console.log(err);
      }
      console.log("Note Saved");
    });
    res.json(newNote);
  });

  // Deleting the chosen note based off ID
  app.delete("/api/notes/:id", function (req, res) {
    
    let databaseFile = path.join(__dirname, "../db/db.json");
    
    // Through the db(database) to find the correct ID
    for (let i = 0; i < db.length; i++) {
      
      if (db[i].id == req.params.id) {
        
        // Cutting out the note using the splice method
        db.splice(i, 1);
        break;

      }
    }
    
    // Writing in the console for the user to know the note deleted properly
    fs.writeFile(databaseFile, JSON.stringify(db), function (err) {
      if (err) {
        return console.log(err);
      } else {
        console.log("Note deleted");
      }
    });
    res.json(db);
  });
};
