const express = require("express");
const app = express();
const User = require("./models/user");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

mongoose.connect('mongodb://127.0.0.1:27017/authDemo')
    .then(() => console.log("Mongo connection open"))
    .catch(err => console.log(err))

// to use ejs
app.set("view engine", "ejs");
app.set("views", "views");

// to parse the request body
app.use(express.urlencoded());

app.get("/", (req, res) => {
    res.send("Home page");
})

app.get("/secret", (req, res) => {
    res.send("THIS IS A BIG SECRET!")
})

app.get("/register", (req, res) => {
    res.render("register")
})

app.post("/register", async (req, res) => {
    const { password, username } = req.body;
    const hash = await bcrypt.hash(password, 12);
    const user = new User({
        username,
        password: hash
    });
    await user.save();
    res.redirect("/");
})

app.get("/login", (req, res) => {
    res.render("login");
})

app.post("/login", async (req, res) => {
    const { password, username } = req.body;
    const user = await User.findOne({ username });
    const validPassword = await bcrypt.compare(password, user.password);
    if (validPassword) {
        res.send("Welcome!")
    } else {
        res.send("Try again.")
    }
})

app.listen(3000, () => {
    console.log("Serving");
})