import React, { useState } from 'react'
import { Nav, Navbar } from 'react-bootstrap'

const NavigationBar = () => {
  const [expanded, setExpanded] = useState(false)
  return (
    <div>
      <Navbar expand="lg" fixed="top" variant="dark" expanded={expanded}>
        <Navbar.Brand href="#/">Bikester</Navbar.Brand>
        <Navbar.Toggle
          area-controls="basic-navbar-nav"
          onClick={() => setExpanded(expanded ? false : 'expanded')}
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#/" onClick={() => setExpanded(false)}>
              Home
            </Nav.Link>
            <Nav.Link href="#/maps" onClick={() => setExpanded(false)}>
              Maps
            </Nav.Link>
            <Nav.Link href="#/weather" onClick={() => setExpanded(false)}>
              Weather
            </Nav.Link>
            <Nav.Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://benjambo.github.io/portfolio/#/"
              onClick={() => setExpanded(false)}
            >
              About Me
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}
export default NavigationBar
