console.log("HELLO FROM OUR FIRST JS FILE!!!!");

// If
if (1 + 1 === 2) {
    console.log("MATH STILL WORKS!!!");
}

// If - else
let random = Math.random();
console.log(random);
if (random < 0.5) {
    console.log("YOUR NUMBER IS LESS THAN 0.5!!!");
} else {
    console.log("YOUR NUMBER IS GREATER THAN 0.5!!!");
}

// If - else if - else
let age = 55;
console.log(age);
if (age < 5) {
    console.log("You are a baby");
} else if (age < 10) {
    console.log("You are a child");
} else if (age < 65) {
    console.log("You are an adult");
} else {
    console.log("You are a senior");
}