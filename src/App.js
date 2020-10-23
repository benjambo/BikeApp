import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'

// Pages
import { Bikes } from './pages/bikes'
import { Home } from './pages/home'
import { Mapper } from './pages/map'
import { Weather } from './pages/weather'

// Components
import NavigationBar from './components/NavigationBar'
import 'bootstrap/dist/css/bootstrap.css'
import LeafletMap from './components/LeafletMap'

const App = () => {
  return (
    <Router>
      <div className="App">
        <NavigationBar />
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/bikes" component={Bikes} />
            <Route path="/maps" component={Mapper} />
            <Route path="/weather" component={Weather} />
            <Route path="/leaflet" component={LeafletMap} />
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App
