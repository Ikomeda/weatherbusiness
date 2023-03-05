const apiKey = '4bd2b4e445d9b4180d22b3428c56724f';
const citySearch = document.querySelector("#city-search");
const geoLocation = `https://api.openweathermap.org/geo/1.0/direct?q=${citySearch.value}&appid=${apiKey}`
let oneDay;
let fiveDay;
fetch(geoLocation)
    .then(response => response.json())
    .then(data => {
       oneDay = `https://api.openweathermap.org/data/2.5/forecast?lat=${data[0].lat}&lon=${data[0].lon}&appid=${apiKey}&units=imperial`
    });

fetch(geoLocation)
    .then(response => response.json())
    .then(data => {
        fiveDay = `https://api.openweathermap.org/data/2.5/onecall?lat=${data[0].lat}&lon=${data[0].lon}&appid=${apiKey}&units=imperial`
    })



citySearch.addEventListener('submit', function() {
    if (!citySearch) {
        return alert('Please enter a valid City name');
    }
    

})