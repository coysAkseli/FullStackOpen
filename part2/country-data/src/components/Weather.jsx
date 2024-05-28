import { useEffect, useState } from 'react'
import axios from 'axios'
import getWeatherIcons from '../services/weatherIcons'

const Weather = ({country}) => {

    const [weather, setWeather] = useState(null)
    const api_key = import.meta.env.VITE_SOME_KEY

    console.log(api_key)

    useEffect(() => {
        axios
            .get(`https://api.openweathermap.org/data/2.5/weather?q=${country.capital}&appid=${api_key}`)
            .then(response => {
                setWeather(response.data)
                console.log(response.data)
            }).catch(error => {
                console.log('error', error)
            })
    }, [country.capital])

    if (!weather) return <p>hello</p>

    console.log(weather)
    console.log(weather.icon)

      let weatherIcon = getWeatherIcons()[`${weather.weather[0].description}`]
      console.log(weatherIcon)
      let source = `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`

    return (
        <div>
            temperature {(weather.main.temp-273.15).toFixed(2)} C
            <br></br>
            <p>{weather.weather[0].description}</p>
            <img src={source} alt='image'></img>
            <br></br>
            wind {weather.wind.speed} m/s
        </div>
    )
}

export default Weather