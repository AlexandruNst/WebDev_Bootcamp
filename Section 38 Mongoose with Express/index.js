const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const methodOverride = require("method-override");

const Product = require("./models/product");

mongoose.connect('mongodb://127.0.0.1:27017/farmStand')
    .then(() => console.log("Mongo connection open"))
    .catch(err => console.log(err))


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded());
app.use(methodOverride("_method"));

app.listen(3000, () => {
    console.log("Listening on port 3000");
})

app.get("/products", async (req, res) => {
    const { category } = req.query;
    if (category) {
        const products = await Product.find({ category });
        res.render("products/index", { products, category });
    } else {
        const products = await Product.find({});
        res.render("products/index", { products, category: "all" });
    }
})

app.get("/products/new", (req, res) => {
    res.render("products/new")
})

app.get("/products/:id", async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render("products/show", { product })
})

app.get("/products/:id/edit", async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render("products/edit", { product })
})

app.put("/products/:id", async (req, res) => {
    const { id } = req.params;
    await Product.findByIdAndUpdate(id, req.body, { runValidators: true });
    res.redirect("/products");
})

app.post("/products", async (req, res) => {
    const product = new Product(req.body);
    await product.save();
    res.redirect("/products");
})

app.delete("/products/:id", async (req, res) => {
    const { id } = req.params;
    await Product.findByIdAndDelete(id);
    res.redirect("/products");
})



