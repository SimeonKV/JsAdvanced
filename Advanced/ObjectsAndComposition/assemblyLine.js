function createAssemblyLine() {
    const obj = {

        hasClima(car) {
            car.temp = 21;
            car.tempSettings = 21;
            car.adjustTemp = function () {
                if (car.temp < car.tempSettings) {
                    car.temp += 1;
                }

                if (car.temp > car.tempSettings) {
                    car.temp -= 1;
                }

            }
        },

        hasAudio(car) {
            car.currentTrack = {
                name: null,
                artist: null
            };
            car.nowPlaying = function () {
                console.log(`Now playing \'${car.currentTrack.name}\' by ${car.currentTrack.artist}`);
            }

        },

        hasParktronic(car) {
            car.checkDistance = function (distanceParam) {
                let printmessage = distanceParam < 0.1 ? 'Beep! Beep! Beep' : distanceParam > 0.1 && distanceParam < 0.25 ? 'Beep! Beep' : 'Beep!';
                console.log(printmessage);
            }
        }


    };

    return obj;
}


const assemblyLine = createAssemblyLine();

const myCar = {
    make: 'Toyota',
    model: 'Avensis'
};



assemblyLine.hasClima(myCar);
console.log(myCar.temp);
myCar.tempSettings = 18;
myCar.adjustTemp();
console.log(myCar.temp);
console.log();


assemblyLine.hasAudio(myCar);
myCar.currentTrack = {
    name: 'Never gonna gett it',
    artist: 'Rick Morty'
};
myCar.nowPlaying();

assemblyLine.hasParktronic(myCar);
myCar.checkDistance(0.04);