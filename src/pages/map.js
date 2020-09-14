import React, { useEffect, useState } from 'react'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'

const api = {
  key: 'b8b339cb458fb8bc4985ef3cc4e552a3',
  base: 'https://api.openweathermap.org/data/2.5/',
}

export const Mapper = () => {
  const [bike, setBike] = useState([])
  const [activeBike, setActiveBike] = useState(null)

  const [weather, setWeather] = useState({})

  useEffect(() => {
    fetch('https://api.citybik.es/v2/networks/citybikes-helsinki')
      .then((res) => res.json())
      .then((res) => setBike(res.network.stations))
  }, [])

  useEffect(() => {
    fetch(`${api.base}weather?q=helsinki&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((res) => setWeather(res))
  }, [])

  return (
    <div className="pages">
      <div className="map-container">
        <Map center={[60.1733244, 24.9410248]} zoom={13}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          {bike.map((stop) => (
            <Marker
              key={stop.id}
              position={[stop.latitude, stop.longitude]}
              onclick={() => {
                setActiveBike(stop)
              }}
            />
          ))}

          {activeBike && (
            <Popup
              key={activeBike.id}
              position={[activeBike.latitude, activeBike.longitude]}
              onClose={() => {
                setActiveBike(null)
              }}
            >
              <div>
                <h3>{activeBike.name}</h3>
                <p>Bikes available: {activeBike.free_bikes}</p>
                <p>Empty slots left: {activeBike.empty_slots}</p>
                <div>
                  <p className="temp">
                    Weather: {Math.round(weather.main.temp)}°C{' '}
                    {weather.weather[0].main}
                  </p>
                </div>
              </div>
            </Popup>
          )}
        </Map>
      </div>
    </div>
  )
}
