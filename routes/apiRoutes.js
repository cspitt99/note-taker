const router = require("express").Router()
const fs = require("fs")
const db = require("../db/db.json")

router.get("/api/notes", (req, res) => {
    res.json("db")
})

router.post("/api/notes", (req, res) => {


})

module.exports = router