const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/tacos", (req, res) => {
    res.send("GET /tacos RESPONSE")
})

app.post("/tacos", (req, res) => {
    const { name, qty } = req.body;
    res.send(`POST /tacos RESPONSE. Here's your ${qty} ${name}(s).`)
})

app.listen(3000, () => {
    console.log("ON PORT 3000")
})