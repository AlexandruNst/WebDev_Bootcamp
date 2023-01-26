function rollDie(numSides = 6) {
    return Math.floor(Math.random() * numSides) + 1;
}

/// 

const cats = ["Blue", "Scout", "Rocket"];
const dogs = ["Rusty", "Wyatt"];

const allPets = [...cats, ...dogs];

const feline = { legs: 4, family: "Felidae" }
const copyCat = { ...feline, isPet: true };