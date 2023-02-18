const express = require("express");
const app = express();
const session = require("express-session");

const sessionOptions = {
    secret: "thisisnotagoodsecret",
    // these two depend on what store you use. Read docs.
    resave: false,
    saveUninitialized: false
}
app.use(session(sessionOptions))

// The session is NOT STORED APPROPRIATELY! This is just for dev, NOT for production. It's just held in JavaScript memory. For prod, we want to connect the sessions to a REAL session store like Redis.

// because we use the session middleware, this will automatically send a cookie
app.get("/viewcount", (req, res) => {
    if (req.session.count) {
        req.session.count += 1;
    } else {
        req.session.count = 1;
    }
    res.send(`You have viewed this page ${req.session.count} times.`)
})

app.get("/register", (req, res) => {
    const { username = "Anonymous" } = req.query;
    req.session.username = username;
    res.redirect("/greet");
})

app.get("/greet", (req, res) => {
    const { username } = req.session;
    res.send(`Welcome back, ${username}`);
})

app.listen(3000, () => {
    console.log("Listening on port 3000");
})