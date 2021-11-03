function solve(numberOfSteps, lengthFootsepInMeters, speedKmH) {
    let distanceKm = (numberOfSteps * lengthFootsepInMeters) / 1000;
    let breakMinutes = Math.floor((distanceKm * 1000) / 500);
    let totalTime = distanceKm / speedKmH;
    
    let output = outputInHoursMinsSeconds(totalTime,breakMinutes);


    console.log(output);



    function outputInHoursMinsSeconds(totalTime,breakMinutes){
        let hours = parseInt(totalTime);
        let minutes = Math.abs(hours - totalTime) * 60;
        let seconds = Math.ceil(Math.abs(parseInt(minutes) - minutes) * 60);

        minutes = parseInt(minutes);
        minutes += breakMinutes;

        if(minutes >= 60){
            hours += 1;
            minutes -= minutes - 60;
        }



        let hoursOutput = hours.toString().length === 1 ?'0' + hours : hours;
        let minutesOuput = minutes.toString().length === 1 ? '0' + minutes : minutes;
        let secondsOutput = seconds.toString().length === 1 ? '0' + seconds : seconds;

        return `${hoursOutput}:${minutesOuput}:${secondsOutput}`;
        
    }

}


solve(4000,0.6,5);
solve(2564,0.7,5.5);