const express = require("express");
const app = express();
const morgan = require("morgan");
app.listen(3000, () => console.log("Listening on port 3000"));
const AppError = require("./AppError");

// app.use is called on every single request, regardless of type or response
// tell it to call the Morgan middleware
app.use(morgan("tiny"));
app.use((req, res, next) => {
    console.log(req.method, req.path);
    req.requestTime = Date.now();
    next();
})

// This defines middleware on specific paths
// this mathces ALL types of requests
app.use("/dogs", (req, res, next) => {
    console.log("I LOVE DOGS");
    next();
})

const verifyPassword = (req, res, next) => {
    const { password } = req.query;
    if (password === "chickennugget") {
        next();
    } else {
        // res.send("SORRY YOU NEED A PASSWORD");
        throw new AppError("Password required!", 401);
    }
}

app.get("/", (req, res) => {
    res.send("Home :)");
})

app.get("/error", (req, res) => {
    chicken.fly();
})

app.get("/dogs", (req, res) => {
    console.log(req.requestTime);
    res.send("Woof Woof");
})

app.get("/secret", verifyPassword, (req, res) => {
    res.send("BIG SECRET!")
})

app.get("/admin", (req, res) => {
    throw new AppError("You are not an admin!", 403);
})

// This middleware will only run if nothing else is send before, i.e. nothing matched i.e. a 404
app.use((req, res) => {
    // res.send("NOT FOUND");
    res.status(404).send("Not found"); // otherwise out req status will actually be 200 OK cus we techinally found something
})

// app.use((err, req, res, next) => {
//     console.log("**********ERROR*************");
//     next(err);
// })

app.use((err, req, res, next) => {
    const { status = 500, message = 'Something went wrong' } = err;
    res.status(status).send(message);
})