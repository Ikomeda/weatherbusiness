const apiKey = `4bd2b4e445d9b4180d22b3428c56724f`;
const citySearch = document.querySelector("#city-search");
const currentCity = document.querySelector("#current-city");

console.log(citySearch.value);
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
            //    const oneDay = (data2, citySearch) => {
            //     const current = data2.list[0];
            //     const getEmoji = current.weather[0].icon;
            //     const icon = `https://openweathermap.org/img/wn/${getIcon}.png`;
            //     const temp = current.main

            //     const oneDayHtml =
            //         `<h3></h3>`
            //    }
                })

            });
    };
    

