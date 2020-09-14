import React, { useEffect, useState } from 'react'

export const Bikes = () => {
  const [bike, setBike] = useState([])
  const [newFilter, setNewFilter] = useState('')

  useEffect(() => {
    fetch('https://api.citybik.es/v2/networks/citybikes-helsinki')
      .then((res) => res.json())
      .then((res) => setBike(res.network.stations))
  }, [])

  // Mapping through the bikelist got from the API and printing them correctly
  const BikeItem = ({ bikes }) => {
    const mapBikes = () =>
      bikes
        .filter((bikeName) =>
          bikeName.name.toLowerCase().includes(newFilter.toLowerCase())
        )
        .map((bike) => (
          <tr key={bike.id}>
            <td>{bike.name}</td>
            <td>{bike.free_bikes}</td>
            <td>{bike.empty_slots}</td>
          </tr>
        ))
    return <tbody>{mapBikes()}</tbody>
  }

  // Handle user input in search field
  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
    console.log(event.target.value)
  }

  return (
      <div className="pages">
        <h1>Helsinki Citybike Webpage</h1>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
            onChange={handleFilterChange}
            value={newFilter}
            onKeyPress={handleFilterChange}
          />
        </div>
        <table className="tables">
          <thead>
            <tr>
              <th>Bike station: </th>
              <th>Bikes available: </th>
              <th>Empty slots left: </th>
            </tr>
          </thead>
          <BikeItem bikes={bike} />
        </table>
      </div>
  )
}
