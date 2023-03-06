const apiKey = `4bd2b4e445d9b4180d22b3428c56724f`;
const citySearch = document.querySelector("#city-search");
const currentCity = document.querySelector("#current-city");

console.log(citySearch.value);

const cityName = citySearch.value;

let forecast;

document.querySelector('#submitbtn').addEventListener('click', convertCity);

function convertCity(event) {
    event.preventDefault();
    const geoLocation = `https://api.openweathermap.org/geo/1.0/direct?q=${citySearch.value}&appid=${apiKey}`
    
    currentCity.innerHTML = citySearch.value
    console.log(citySearch.value);
    fetch(geoLocation)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const lat = data[0].lat
        const lon = data[0].lon

        const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`
        fetch(forecastUrl)
            .then(response => response.json())
            .then(data2 => {
                forecast = forecastUrl;
                console.log("forecastUrl ~>", forecastUrl);
                console.log("data2 ~>", data2);
                const date = data2.list[0].dt_txt
                const temp = data2.list[0].main.temp
                const humidity = data2.list[0].main.humidity
                const windSpeed = data2.list[0].wind.speed
                // console.log(date, temp, humidity, windSpeed);

                const todayWeather = 
                `<h3>(${date})</h3>
                <p>Temp: (${temp})°F</p>
                <p>Humidity: (${humidity})%</p>
                <p>Wind Speed: (${windSpeed}) MPH</p>`;

                console.log(todayWeather);

                $('#one-day').html('');
                $('#one-day').append(todayWeather);



                const dateTwo = data2.list[6].dt_txt
                const tempTwo = data2.list[6].main.temp
                const humidityTwo = data2.list[6].main.humidity
                const windSpeedTwo = data2.list[6].wind.speed

                const dateThree = data2.list[14].dt_txt
                const tempThree = data2.list[14].main.temp
                const humidityThree = data2.list[14].main.humidity
                const windSpeedThree = data2.list[14].wind.speed

                const dateFour = data2.list[22].dt_txt
                const tempFour = data2.list[22].main.temp
                const humidityFour = data2.list[22].main.humidity
                const windSpeedFour = data2.list[22].wind.speed

                const dateFive = data2.list[30].dt_txt
                const tempFive = data2.list[30].main.temp
                const humidityFive = data2.list[30].main.humidity
                const windSpeedFive = data2.list[30].wind.speed

                const dateSix = data2.list[38].dt_txt
                const tempSix = data2.list[38].main.temp
                const humiditySix = data2.list[38].main.humidity
                const windSpeedSix = data2.list[38].wind.speed
                
                // console.log(dateTwo, tempTwo, humidityTwo, windSpeedTwo, dateThree, tempThree, humidityThree, windSpeedThree, dateFour, tempFour, humidityFour, windSpeedFour, dateFive, tempFive, humidityFive, windSpeedFive, dateSix, tempSix, humiditySix, windSpeedSix,);

                const weekWeather1 = 
                `<h3>(${dateTwo})</h3>
                <p>Temp: (${tempTwo})°F</p>
                <p>Humidity: (${humidityTwo})%</p>
                <p>Wind Speed: (${windSpeedTwo}) MPH</p>`;

                const weekWeather2 = 
                `<h3>(${dateThree})</h3>
                <p>Temp: (${tempThree})°F</p>
                <p>Humidity: (${humidityThree})%</p>
                <p>Wind Speed: (${windSpeedThree}) MPH</p>`;

                const weekWeather3 = 
                `<h3>(${dateFour})</h3>
                <p>Temp: (${tempFour})°F</p>
                <p>Humidity: (${humidityFour})%</p>
                <p>Wind Speed: (${windSpeedFour}) MPH</p>`;

                const weekWeather4 = 
                `<h3>(${dateFive})</h3>
                <p>Temp: (${tempFive})°F</p>
                <p>Humidity: (${humidityFive})%</p>
                <p>Wind Speed: (${windSpeedFive}) MPH</p>`;

                const weekWeather5 = 
                `<h3>(${dateSix})</h3>
                <p>Temp: (${tempSix})°F</p>
                <p>Humidity: (${humiditySix})%</p>
                <p>Wind Speed: (${windSpeedSix}) MPH</p>`;


                console.log(weekWeather1,
                    weekWeather2,
                    weekWeather3,
                    weekWeather4,
                    weekWeather5,);

                $('#five-day').html('');
                $('#five-day').append(weekWeather1,
                    weekWeather2,
                    weekWeather3,
                    weekWeather4,
                    weekWeather5,)

                    function saveCity() {
                        
                    const searchedCity = citySearch.value
                    console.log(searchedCity);
                    // searchedCity.push(city)
                    
                    // searchedCity.splice(5)
                    
                    localStorage.setItem('searchedCity', JSON.stringify(searchedCity))
                    const storedCities = JSON.parse(localStorage.getItem('searchedCity'));
                    const displaySearchHistory = `<li>${storedCities}</li>`
                    $('#search-history').append(displaySearchHistory)

                    
                    
                }
                saveCity();
            })
            
            });
    };


