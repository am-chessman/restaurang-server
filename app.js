import express from "express"
import bodyParser from "body-parser";
import pg from "pg";
import { body, query, validationResult } from "express-validator";

const app = express();
const port = 3000;

app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended:true}))
app.set("view engine", "ejs")

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

// Add database to manage Email collection
const validateEmail = () => body("email").optional().notEmpty().escape().trim().isEmail();
app.post("/submit", validateEmail(), body("email").custom(async value => {
    const user = await userCollection.findUserByEmail(value)
    if (user) {
        throw new Error ("Email is already in use")
    }
}), (req, res) => {
    const result = validationResult(req);
    if (result.isEmpty()) {

    } else {
        console.log({errors: result.array()})
    }
})

app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
})