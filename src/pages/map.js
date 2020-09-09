import React, { useEffect, useState } from 'react'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import { Icon } from 'leaflet'

export const Mapper = () => {
  const [bike, setBike] = useState([])
  const [activeBike, setActiveBike] = useState(null)

  useEffect(() => {
    fetch('https://api.citybik.es/v2/networks/citybikes-helsinki')
      .then((res) => res.json())
      .then((res) => setBike(res.network.stations))
  }, [])

  return (
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
              <p>Amount of free bikes: {activeBike.free_bikes}</p>
              <p>Empty slots left: {activeBike.empty_slots}</p>
            </div>
          </Popup>
        )}
      </Map>
    </div>
  )
}
