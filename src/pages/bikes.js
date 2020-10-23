import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table'

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
        return <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Bike stations by name: </th>
              <th>Bikes available: </th>
              <th>Empty slots: </th>
            </tr>
          </thead>
          <tbody>{mapBikes()}</tbody></Table>
  }

  // Handle user input in search field
  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
    console.log(event.target.value)
  }

  return (
      <div className="searcher">
        <h1>Helsinki Citybikes</h1>
        <div className="search-box" style={{ display: 'flex', justifyContent: 'center' }}>
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
            onChange={handleFilterChange}
            value={newFilter}
            onKeyPress={handleFilterChange}
          />
          <button type="submit" className="search-bar-button">
              Search
            </button>
        </div>
          <BikeItem bikes={bike} />        
      </div>
  )
}

export default Bikes
