const mongoose = require("mongoose");

// main().catch(err => console.log(err));

// async function main() {
//     await mongoose.connect('mongodb://127.0.0.1:27017/movieApp');
//     console.log("CONNECTION OPEN!!!!");

// }

mongoose.connect('mongodb://127.0.0.1:27017/movieApp')
    .then(() => console.log("CONNECTION ESTABLISHED"))
    .catch(err => console.log(err))


const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
});

const Movie = mongoose.model("Movie", movieSchema);
// const amadeus = new Movie({ title: "Amadeus", year: 1986, score: 9.2, rating: "R" });
// amadeus.save();

// // this returns a promise
// Movie.insertMany([
//     { title: "Alien", year: 1979, score: 8.1, rating: "R" },
//     { title: "The Iron Giant", year: 1999, score: 7.5, rating: "PG" }
// ])
//     .then(data => {
//         console.log("IT WORKED!");
//         console.log(data);
//     })

Movie.findOne();
Movie.findById();
Movie.updateOne({}, {});
Movie.updateMany({}, {});
Movie.remove();

Movie.findByIdAndDelete();
Movie.findByIdAndUpdate();




