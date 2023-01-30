class Pet {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    eat() {
        return `${this.name} is eating.`
    }
}

class Cat extends Pet {
    constructor(name, age, livesLeft = 9) {
        super(name, age);
        this.livesLeft = livesLeft;
    }
    meow() {
        return "MEOW!"
    }
}

class Dog extends Pet {
    bark() {
        return "WOOF!"
    }

    eat() {
        return "THIS DOG IS EATING"
    }
}