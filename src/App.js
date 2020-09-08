import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'

// Pages
import { Bikes } from './pages/bikes'
import { Home } from './pages/home'
import { Mapper } from './pages/map'

// Components
import NavigationBar from './components/NavigationBar'
import 'bootstrap/dist/css/bootstrap.css'

const App = () => {
  return (
    <Router>
      <div className="App">
        <NavigationBar />
        <div className="container">
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route path="/bikes" component={Bikes} />
            <Route path="/maps" component={Mapper} />
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App
