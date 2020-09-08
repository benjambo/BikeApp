import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
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
            <Route exact path="/" component={Home} />
            <Route exact path="/bikes" component={Bikes} />
            <Route exact path="/maps" component={Mapper} />
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App
