import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import { body, validationResult } from "express-validator";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

const db = new pg.Client({
    user: "postgres",
    host: "35.242.224.23",
    password: "&xj6M:(V-]oa_GVJ",
    database: "userdata",
    port: 5432
});

db.connect()
    .catch((error) => console.log("Database connection error:", error));


// Homepage
app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.get("/home", (req, res) => {
    res.redirect("/");
});

app.get("/menu", (req, res) => {
    res.render("menu.ejs");
});

app.get("/contact", (req, res) => {
    res.render("contact.ejs");
});

app.get("/booking", (req, res) => {
    res.render("booking.ejs");
});

// Add database to manage Email collection
app.post(
    "/submit",
    body("email").notEmpty().trim().escape().isEmail().withMessage("Invalid email format"),
    async (req, res) => {
        const result = validationResult(req);
        if (!result.isEmpty()) {
            console.log(res.status(400).json({ errors: result.array() }));
        }

        const email = req.body.email;

        try {
            const userCollection = await db.query("SELECT * FROM userinfo WHERE email = $1", [email]);
            if (userCollection.rows.length > 0) {
                console.log(res.status(400).json({ errors: [{ msg: "Email is already in use" }] }));
            }

            await db.query("INSERT INTO userinfo (email) VALUES ($1)", [email]);
            res.status(200).json({ message: "Email submitted successfully" });
            res.redirect("/")
        } catch (error) {
            console.error("Database query error:", error);
            res.status(500).json({ errors: [{ msg: "Internal server error" }] });
        }
    }
);


//Booking page
app.post(
    "/book-a-table",
    body("firstName").notEmpty(),
    body("lastName").notEmpty(), 
    body("email").notEmpty().trim().isEmail().withMessage("Invalid email format"),
    body("guestNumber").notEmpty(),
    async (req, res) => {
        const result = validationResult(req)
        if (!result.isEmpty()) {
            res.status(400).json({errors: result.array()})
        }


        //Stopped HERE!!!!!!!!!!
})

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});
