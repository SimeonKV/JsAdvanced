class Point {

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static distance(pointOne, pointTwo) {
        let diffBetweenP1XP2X = Math.abs(pointOne.x - pointTwo.x);
        let diffBetweenP1YP2Y = Math.abs(pointOne.y - pointTwo.y);

        let distance = (diffBetweenP1XP2X * diffBetweenP1XP2X) + (diffBetweenP1YP2Y * diffBetweenP1YP2Y);

         distance = Math.sqrt(distance);
         return distance;
    }

}

let p1 = new Point(5,5);
let p2 = new Point(9,8);

console.log(Point.distance(p1,p2));