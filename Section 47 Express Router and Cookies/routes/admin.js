const express = require("express");
const router = express.Router();

router.use((req, res, next) => {
    if (req.query.isAdmin) {
        next();
    } else {
        res.send("SORRY NOT AN ADMIN")
    }
})

router.get("/topsecret", (req, res) => {
    res.send("SECRET")
})

router.get("/deletedeverything", (req, res) => {
    res.send("ALL DELETED")
})

module.exports = router;
