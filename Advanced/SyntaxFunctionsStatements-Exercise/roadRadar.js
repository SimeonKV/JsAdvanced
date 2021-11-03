function solve(arr) {
    let speedLimits = new Map();
    speedLimits.set('motorway', 130);
    speedLimits.set('interstate', 90);
    speedLimits.set('city', 50);
    speedLimits.set('residential', 20);

    let speed = +arr.shift();
    let area = arr.shift();

    if (overLimit(speedLimits, area, speed)) {
        showMessage(speedLimits, area, speed);
    }



    function overLimit(speedLimits, area, speed) {
        return speedLimits.get(area) - speed < 0;
    }


    function showMessage(speedLimits, area, speed) {
        let overLimit = speed - speedLimits.get(area);

        if (overLimit >= 1 && overLimit <= 20) {
            console.log('speeding');
        } else if (overLimit > 20 && overLimit <= 40) {
            console.log('excessive speeding')
        } else {
            console.log('reckless driving');
        }


    }

}


solve([180,'interstate']);