const inputValue = document.getElementById('inputValue')
const submitBtn = document.getElementById('submit-btn')
const apparition = document.getElementById('apparition')

let css = document.getElementById('css')
let imageTemp = document.querySelector('.temps-icon')
let blobs = document.querySelector('.blobs')

const form = document.getElementById('form')

let cityName = document.querySelector('.city-name')
let weatherTxt = document.querySelector('.temps-text')
let degres = document.querySelector('.degres')
let humidity = document.querySelector('.humidity')
let wind = document.querySelector('.speed')

const APIKEY = 'a949d3c6e48d1019e4cabe1a894c3499'
let resultatsAPI;

submitBtn.addEventListener('click', (e) => {
    
    apparition.style.display = "block";
    form.style.display = "none"
    e.preventDefault()

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue.value}&appid=${APIKEY}&lang=fr&units=metric`)
    .then((reponse) => {
        return reponse.json();
    })
    .then((data) => {
        console.log(data)
        resultatsAPI = data;
        cityName.innerText = resultatsAPI.name
        weatherTxt.innerText = resultatsAPI.weather[0].main
        degres.innerHTML = `${Math.trunc(resultatsAPI.main.temp)}°`
        wind.innerHTML = `${Math.trunc(resultatsAPI.wind.speed)} km/h`
        humidity.innerHTML = `${Math.trunc(resultatsAPI.main.humidity)} %`

        let weather = resultatsAPI.weather[0].main

        if(weather === "Clouds"){
            css.href= "styles/style2.css"
            imageTemp.src = "images/rain.svg"
            blobs.src = "images/blobs-rain.svg"
        }
    })
    
})
