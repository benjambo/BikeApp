import React, { useState } from 'react'

const api = {
  key: 'b8b339cb458fb8bc4985ef3cc4e552a3',
  base: 'https://api.openweathermap.org/data/2.5/',
}

export const Weather = () => {
    const [query, setQuery] = useState('')
    const [weather, setWeather] = useState({})

    const search = (evt) => {
      if (evt.key === 'Enter') {
        fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
          .then((res) => res.json())
          .then((result) => {
            setWeather(result)
            setQuery('')
            console.log(result)
          })
      }
    }

    const dateBuilder = (d) => {
      let months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ]
      let days = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ]

      let day = days[d.getDay()]
      let date = d.getDate()
      let month = months[d.getMonth()]
      let year = d.getFullYear()

      return `${day} ${date} ${month} ${year}`
    }

  return (
    <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 16) ? 'weather warm' : 'weather cold') : 'weather'}>
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        {typeof weather.main != 'undefined' ? (
          <div>
            <div className="location-box">
              <div className="location">
                {weather.name}, {weather.sys.country}
              </div>
              <div className="date">{dateBuilder(new Date())}</div>
            </div>
            <div className="weather-box">
              <div className="temp"> {Math.round(weather.main.temp)}°c</div>
              <div className="weather-description">
                {weather.weather[0].main}
              </div>
            </div>
          </div>
        ) : (
          <div className="weather-empty">
              <p>Search for weather here</p>
          </div>
        )}
      </main>
    </div>
  )
}

export default Weather

/*
        <div>
            <div className="location-box">
              <div className="location">
                Helsinki, Finland
              </div>
              <div className="date">{dateBuilder(new Date())}</div>
            </div>
            <div className="weather-box">
              <div className="temp"> 10°c</div>
              <div className="weather-description">
                Cold
              </div>
            </div>
        </div>
*/