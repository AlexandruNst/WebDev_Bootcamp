const express = require("express");
const app = express();

// cats => meow
// dogs => woof
// /

app.get("/", (req, res) => {
    // res.send("THIS IS THE HOMEPAGE!");
    res.send("WELCOME TO THE HOMEPAGE!");
})

app.get("/cats", (req, res) => {
    res.send("MEOW!");
})

app.get("/dogs", (req, res) => {
    res.send("WOOF!");
})

app.post("/cats", (req, res) => {
    res.send("POST REQUEST TO /CATS")
})

app.get("/r/:subreddit", (req, res) => {
    res.send(`THIS IS THE ${req.params.subreddit} SUBREDDIT!`)
})

app.get("/r/:subreddit/:postId", (req, res) => {
    const { subreddit, postId } = req.params;
    res.send(`THIS IS THE ${postId} POST OF THE ${subreddit} SUBREDDIT!`)
})

app.get("/search", (req, res) => {
    const { q } = req.query;
    res.send(`<h1>Search results for: ${q}<h1/>`);
})

app.get("*", (req, res) => {
    res.send("I DON'T KNOW THAT PATH :/")
})

app.listen(3000, () => {
    console.log("LISTENING ON PORT!!");
})