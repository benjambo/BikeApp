import React, { useEffect, useState } from 'react'
import {
  Button,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from 'react-bootstrap'
import styled from 'styled-components'

const Styles = styled.div`
  form {
    width: auto;
  }
  button {
    margin: 1vh;
  }
  .navbar {
    background-color: black;
  }
  .navbar-default,
  .collapsed {
    border-color: white;
    background-color: white;
  }
  .navbar-default,
  .toggle {
    background-color: white;
  }
  .navbar-brand,
  .navbar-nav .nav-link {
    color: white;
    margin: 2vh 2vw 2vh 2vw;
    &:hover {
      color: #690505;
    }
  }
  .navbar-light .navbar-nav .nav-link {
    color: white;
    &:hover {
      color: #690505;
    }
  }
  .navbar-light .navbar-brand {
    color: white;
    &:hover {
      color: #690505;
    }
  }
  .dropdown {
    color: black;
    &:hover {
      color: #690505;
    }
  }
`

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

  // hHndle user input in search field
  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
    console.log(event.target.value)
  }

  return (
    <Styles>
      <Navbar expand="lg" fixed="top">
        <Navbar.Brand href="/">Bikes</Navbar.Brand>
        <Navbar.Toggle area-controls="basic-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Form inline>
            <FormControl
              type="text"
              placeholder="Search"
              className="mr-sm-2"
              value={newFilter}
              onChange={handleFilterChange}
            />
            <Button variant="outline-dark">Search</Button>
          </Form>
          <Nav className="ml-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#/bikes">Bikes</Nav.Link>
            <NavDropdown title="Maps" id="basic-nav-dropdown">
              <NavDropdown.Item href="#/maps">Maps</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://benjambo.github.io/portfolio/#/">
                Benjambo
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="App">
        <h1>Alepa-pyörä Websivusto</h1>
        <table className="tables">
          <thead>
            <tr>
              <th>Pyöräasema: </th>
              <th>Saatavilla olevat pyörät: </th>
              <th>Vapaita paikkoja jäljellä: </th>
            </tr>
          </thead>
          <BikeItem bikes={bike} />
        </table>
      </div>
    </Styles>
  )
}
