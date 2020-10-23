import React, { useState } from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'

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
    border-color: grey;
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

const NavigationBar = () => {
  const [expanded, setExpanded] = useState(false)
  return (
    <Styles>
      <Navbar expand="lg" fixed="top" variant="dark" expanded={expanded}>
        <Navbar.Brand href="#/">Bikester</Navbar.Brand>
        <Navbar.Toggle 
          area-controls="basic-navbar-nav" 
          onClick={() => setExpanded(expanded ? false : 'expanded')}/>
        <Navbar.Collapse id="responsive-navbar-nav" >
          <Nav className="ml-auto">
            <Nav.Link href="#/" onClick={() => setExpanded(false)}>Home</Nav.Link>
            <Nav.Link href="#/maps" onClick={() => setExpanded(false)}>Maps</Nav.Link>
            <Nav.Link href="#/weather" onClick={() => setExpanded(false)}>Weather</Nav.Link>
            <NavDropdown title="About Me" id="basic-nav-dropdown">
              <NavDropdown.Item
                target="_blank"
                rel="noopener noreferrer"
                href="https://benjambo.github.io/portfolio/#/"
                onClick={() => setExpanded(false)}
              >
                Benjamin J. S.
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styles>
  )
}
export default NavigationBar
