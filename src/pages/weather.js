import React, { useState } from 'react'
import { Spring } from 'react-spring/renderprops'

const api = {
  key: 'b8b339cb458fb8bc4985ef3cc4e552a3',
  base: 'https://api.openweathermap.org/data/2.5/',
}

export const Weather = () => {
  const [query, setQuery] = useState('')
  const [weather, setWeather] = useState({})
  const [apiError, setapiError] = useState('')

  const search = (evt) => {
    if (evt.key === 'Enter') {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result)
          setQuery('')
          setapiError(result.message)
        })
        .catch((err) => {
          console.log(err.message)
        })
    }
  }

  // Formating date
  const dateFormat = () => {
    let date = new Intl.DateTimeFormat('en-GB', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: '2-digit',
      hour: 'numeric',
      minute: 'numeric',
    }).format()
    return date
  }

  // Handle user input in search field
  const handleFilterChange = (event) => {
    setQuery(event.target.value)
    console.log(event.target.value)
  }

  return (
    <Spring
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}
      config={{ duration: 800 }}
    >
      {(props) => (
        <div
          style={props}
          className={
            typeof weather.main != 'undefined'
              ? weather.main.temp > 16
                ? 'weather warm'
                : 'weather cold'
              : 'weather'
          }
        >
          <main>
            <div className="search-box">
              <input
                type="text"
                className="search-bar"
                placeholder="Search..."
                onChange={handleFilterChange}
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
                  <div className="date">{dateFormat()}</div>
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
                <p>Search for Weather by City</p>
                <p>{apiError}</p>
              </div>
            )}
          </main>
        </div>
      )}
    </Spring>
  )
}

export default Weather
