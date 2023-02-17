const express = require("express");
const app = express();
const shelterRoutes = require("./routes/shelters");
const dogRoutes = require("./routes/dogs");
const adminRoutes = require("./routes/admin");
const cookieParser = require("cookie-parser");

app.use(cookieParser('thisismysecret'));

app.get("/greet", (req, res) => {
    const { name = "No-name" } = req.cookies;
    res.send(`Hey there ${name}`);
})

app.get("/setname", (req, res) => {
    res.cookie("name", "stevie");
    res.send("SENT YOU A COOKIE");
})

app.get("/getsignedcookie", (req, res) => {
    res.cookie("fruit", "grape", { signed: true })
    res.send("GOT A SIGNED COOKIE")
})

app.get("/verifyfruit", (req, res) => {
    res.send(req.signedCookies);
})

app.use("/shelters", shelterRoutes);
app.use("/dogs", dogRoutes);
app.use("/admin", adminRoutes);

app.listen(3000, () => {
    console.log("Listening on port 3000");
})