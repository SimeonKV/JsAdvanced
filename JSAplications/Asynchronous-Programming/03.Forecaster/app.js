function attachEvents() {
    const button = document.querySelector(`#submit`);
    const url = `http://localhost:3030/jsonstore/forecaster/locations`;

    class WeatherInformationBuilder {

        constructor() {
            this.weatherRelatedIcons = {
                'Sunny': '&#x2600;',
                'Partly sunny': '&#x26C5;',
                'Overcast': '&#x2601;',
                'Rain': '&#x2614;',
                'Degrees': '&#176;'
            }
        }

        createForcast(param, weatherInformation) {
            if (param === 'current') {
                return this.createCurrentForcast(weatherInformation);
            } else if (param === 'threeDays') {
                return this.createThreeDayForcast(weatherSymbol, weatherInWords, high, low, degrees);
            }

        }


        createCurrentForcast(weatherInformation) {
            return `
         <span class="condition symbol">${this.weatherRelatedIcons[weatherInformation.weatherInWords]}</span>
         <span class="condition">
           <span class="forcast-data">${weatherInformation.locationName}</span> 
           <span class="forcast-data">${weatherInformation.tempLow}${this.weatherRelatedIcons.Degrees}/${weatherInformation.tempHigh}${this.weatherRelatedIcons.Degrees}</span> 
           <span class="forcast-data">${weatherInformation.weatherInWords}</span> 
        </span> 
        `;
        }

        createThreeDayForcast(weatherInformation) {
         return   `
            <span class="upcoming">
            <span class="symbol">${this.weatherRelatedIcons[weatherInformation.weatherInWords]}</span>
            <span class="forcast-data">${weatherInformation.tempLow}${this.weatherRelatedIcons.Degrees}/${weatherInformation.tempHigh}${this.weatherRelatedIcons.Degrees}</span> 
            <span class="forcast-data">${weatherInformation.weatherInWords}</span> 
            </span>
            `

        }

    }

    class WeatherInformation {
        constructor(weatherInWords, locationName = 'Default', tempHigh, tempLow) {
            this.weatherInWords = weatherInWords;
            this.locationName = locationName;
            this.tempHigh = tempHigh,
            this.tempLow = tempLow
        }
    }

    class WeatherDisplayer {

        async displayCurrentWeather(locationCode) {
            const url = `http://localhost:3030/jsonstore/forecaster/today/${locationCode}`;
            const response = await fetch(url);
            const data = await response.json();

            const weatherInformation = new WeatherInformation(data.forecast.condition, data.name, data.forecast.high, data.forecast.low);
            const wib = new WeatherInformationBuilder

            const divCurrent = document.querySelector('div#current');
            const divForecast = document.createElement('div');
            divForecast.classList.add('forecasts');

            divForecast.innerHTML = wib.createForcast('current', weatherInformation);
            divCurrent.insertAdjacentElement("beforeend", divForecast);

        }


        async displayThreeDaysWeather(locationCode) {
            const url = `http://localhost:3030/jsonstore/forecaster/upcoming/${locationCode}`;
            const response = await fetch(url);
            const data = await response.json();

            const divUpcoming = document.querySelector('#upcoming')
            const divForecastInfo = document.createElement('div');
            divForecastInfo.classList.add('forecast-info');

            data.forecast.forEach(entry => {
                const weatherInformation = new WeatherInformation(entry.condition,'default',entry.high,entry.low);
                const wib = new WeatherInformationBuilder().createThreeDayForcast(weatherInformation);
                divForecastInfo.insertAdjacentHTML('beforeend',wib);
            })

            divUpcoming.insertAdjacentElement('beforeend',divForecastInfo);

        }

    }

    button.addEventListener('click', fetchLocationForecast);

    async function fetchLocationForecast() {
        const searchedLocation = document.querySelector('#location').value;
        const response = await fetch(url);
        const data = await response.json();
        const location = data.find(el => searchedLocation === el.name);

        document.querySelector('div#forecast').style.display = 'block';
        const weatherDisplayer = new WeatherDisplayer();
        weatherDisplayer.displayCurrentWeather(location.code);
        weatherDisplayer.displayThreeDaysWeather(location.code);
        console.log('hi');

    }

}
attachEvents();