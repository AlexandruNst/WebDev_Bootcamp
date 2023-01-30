// Constructor function

function Color(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
}

Color.prototype.rgb = function () {
    const { r, g, b } = this;
    return `rgb(${r}, ${g}, ${b})`;
}

let color = new Color(255, 40, 100);

/////////////////////

// Class

class ColorClass {
    constructor(r, g, b) {
        this.r = r;
        this.g = g;
        this.b = b;
    }

    greet() { // goes on the prototype!
        return "Hello from a color";
    }

    rgb() {
        const { r, g, b } = this;
        return `rgb(${r}, ${g}, ${b})`;
    }
}

const color2 = new ColorClass(255, 67, 89);