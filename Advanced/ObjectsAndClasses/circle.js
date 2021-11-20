class Circle {

    constructor(radius) {
        this.radius = radius;
    }

    set diameter(diameter) {
        this.radius = diameter / 2;
    }

    get diameter() {
        return this.radius + this.radius;
    }

    get area() {
        return Math.PI * this.radius * this.radius;
    }


}


let c = new Circle(2);
console.log(c.radius);
console.log(c.diameter);
console.log(c.area);
c.diameter = 1.6;
console.log(c.radius);
console.log(c.diameter);
console.log(c.area);