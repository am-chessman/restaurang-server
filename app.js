import express from "express"
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended:true}))

app.get("/", (req, res) => {
    res.render("index.ejs")
})

app.get("/home", (req, res) => {
    res.redirect("/")
})

app.get("/menu", (req, res) => {
    res.render("menu.ejs")
})

app.get("/contact", (req, res) => {
    res.render("contact.ejs")
})

app.get("/booking", (req, res) => {
    res.render("booking.ejs")
})

// STOPPED HERE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
app.post("/submit", (req, res) => {
    const {email} = req.body;
})

app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
})