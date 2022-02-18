

// form
const form = document.querySelector('#weatherDataForm')

form.addEventListener('submit', (event)=>{
    event.preventDefault()
    let location = document.querySelector('#location')
    let locationInput = event.path[0][0].value

    loadData(locationInput)
    getPhoto(locationInput)
})

//get data
const getData = async (locationInput) =>{
    let response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${locationInput}&appid=f2889529c4f9762d523a2bd8a9527b82`)

    return response.data
}

const DOM_Elements = {
    weather: '.weatherInfo'
}

function capitalize(str) {
    const lower = str.toLowerCase()
    return str.charAt(0).toUpperCase() + lower.slice(1)
}


const create_info = (temp, tempMin, tempMax, curWeather, desc, humid, wind)=>{
    const html = `
        
        <div class="big">
            <div class="information">
                <h2> ${curWeather} </h2>
                <p>${capitalize(desc)}</p>
            </div>
            <div class="information">
                <h1>${temp}°F</h1>
            </div>
        </div>
        <div class="bottom">
            <p>Max/Min: ${tempMax}°F ${tempMin}°F<br>Humidity: ${humid}%<br>Wind Speed: ${wind}m/s</p>
            <div class="back">
                <button onclick="window.location.reload()" id="submitButton">back</button>
            </div>
        </div>
        `

    document.querySelector(DOM_Elements.weather).insertAdjacentHTML("beforeend", html)
}

const loadData = async (locationInput) =>{
    clearData()
    const weatherList = await getData(locationInput);
    const convertF = (str)=>{
        return Math.ceil(((parseInt(str)-273.15)*1.8)+32)
        
    }
    create_info(
        convertF(weatherList.main.temp), 
        convertF(weatherList.main.temp_min),
        convertF(weatherList.main.temp_max),
        weatherList.weather[0].main,
        weatherList.weather[0].description,
        weatherList.main.humidity,
        weatherList.wind.speed
        )

}

const clearData = () =>{
    document.querySelector(DOM_Elements.weather).innerHTML = '';
}


const getPhoto = async (locationInput) =>{
    let response1 = await axios.get(`https://api.unsplash.com/search/photos?query=${locationInput}&client_id=uVg3r-9kDwTey85w5118AQP7XEcU7K8hYP_KNZcqA2A&per_page=3`)
    let photo =  response1.data.results[0].urls.small
    document.querySelector(DOM_Elements.weather).style.backgroundSize = 'fill'
    document.querySelector(DOM_Elements.weather).style.backgroundImage = `linear-gradient(rgba(100,100,100,0.6), rgba(100,100,100,0)), url(${photo})`
    console.log(photo)
}

