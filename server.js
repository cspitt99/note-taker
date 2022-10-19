const express = require("express")
const htmlRoute=require("./routes/htmlRoutes")
const apiRoute=require("./routes/apiRoutes")
const PORT = process.env.PORT || 3001

const app = express()

app.use(express.static("public"))

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(apiRoute)

app.use(htmlRoute)

app.listen(PORT, () => {
    console.log("app is listening on Port http://localhost:" + PORT)
})