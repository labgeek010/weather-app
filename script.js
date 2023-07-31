let baseURL = 'https://api.openweathermap.org/data/2.5/weather'
let api_key = '65e7134c3e0cd8e28f84ffbf8fb3623c'
let kalvinCon = 273.15

document.getElementById('searchButton').addEventListener('click', () => {
    const city = document.getElementById('entryCity').value
    if(city){
        fetchWeatherData(city)
    }
})

function fetchWeatherData(city){
    fetch (`${baseURL}?q=${city}&appid=${api_key}`)
    .then(data => data.json())
    .then(data => showWeatherData(data))

}

function showWeatherData(data){
    const divWeatherData = document.getElementById('weatherData')
    divWeatherData.innerHTML=''

    const cityName = data.name
    const countryName = data.sys.country
    const temp     = data.main.temp
    const humidity = data.main.humidity
    const descrip  = data.weather[0].description
    const icon = data.weather[0].icon
    
    const cityTitle = document.createElement ('h2')
    cityTitle.textContent = `${cityName}, ${countryName}`

    const temperatureInfo = document.createElement ('p')
    temperatureInfo.textContent = `The Weather temperature is ${Math.floor(temp-kalvinCon)} °C`

    const humidityInfo = document.createElement ('p')
    humidityInfo.textContent = `Humidity at ${humidity} %`

    const iconInfo = document.createElement('img')
    iconInfo.src = `https://openweathermap.org/img/wn/${icon}@2x.png`
    
    const descriptionInfo = document.createElement ('p')
    descriptionInfo.textContent = `The weather description is ${descrip}`



    divWeatherData.appendChild(cityTitle)
    divWeatherData.appendChild(humidityInfo)
    divWeatherData.appendChild(temperatureInfo)
    divWeatherData.appendChild(iconInfo)
    divWeatherData.appendChild(descriptionInfo)

}