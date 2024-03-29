const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function print(element) {
    console.log(element);
}

numbers.forEach(print)

//////

numbers.forEach(function (el) {
    console.log(el);
})

/////

let doubles = numbers.map(function (num) {
    return num * 2;
})

/////

const square = (x) => {
    return x * x;
}

const greet = () => console.log("Hi! :)")

//////

const rollDie = () => (Math.floor(Math.random() * 6) + 1);
const add = (a, b) => a + b;
const squared = x => x * x;

////

let arr = numbers.filter(n => {
    return n <= 10;
})

///

let allSmall = numbers.every(n => n < 20);
let someVerySmall = numbers.some(n => n < 5);

/////

let sum = numbers.reduce((total, num) => {
    return total + num;
})