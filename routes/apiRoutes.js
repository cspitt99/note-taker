const router = require("express").Router()
const fs = require("fs")
const db = require("../db/db.json")

router.get("/api/notes", (req, res) => {
    res.json("db")
})

router.post("/api/notes", (req, res) => {
    const { title, text } = req.body;

    if (title && text) {
        const newNote = {
          title,
          text
        }
    
        readFromFile("./db/db.json",(err, data) => {
          if (err) {
            console.error(err);
          } else {
            const parsedNotes = JSON.parse(data);
    
            parsedNotes.push(newNote);
            console.log(parsedNotes);
            res.status(201).json(parsedNotes);
    
            fs.writeFile(
              './db/db.json',
              JSON.stringify(parsedNotes, null, 4),
            );
          }
        });
      } else {
        res.status(500).json('Error in posting note');
      }

})

module.exports = router