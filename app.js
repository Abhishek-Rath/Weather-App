const api_key = '9497e1831884723a1826d1be7e034248';
const base_url = "https://api.openweathermap.org/data/2.5/"


const city = document.querySelector('.search-city');
// console.log(city);
const btn = document.querySelector('#search-button');

const loc = document.querySelector('.location');
let icon = document.querySelector('.icon');
const temp = document.querySelector('.temp');
const summary = document.querySelector('.summary');


//add event listener to button
btn.addEventListener('click', getWeather);


function getWeather() {
    let url = `${base_url}weather?q=${city.value}&units=metric&appid=${api_key}`;
    console.log(url);
    console.log(city.value);

    fetch(url)
    .then(response => {
        return response.json();
    }) .then(displayWeather);
};


function displayWeather(response) {
    loc.textContent = response.name;
    // let icon1 = response.weather[0].icon;
    // icon.innerHTML = `<img src="icons/${icon1}.svg" style= 'height:10rem'/>`;
    temp.textContent = response.main.temp + "°C";
    summary.textContent = response.weather[0].description;
};