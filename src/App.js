import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import WeatherBar from './components/UI/bootstrap'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import mainPage from './components/mainPage'
import { Component } from 'react'

class App extends Component {

  render() {
    return(
      <BrowserRouter>
        <WeatherBar />
        <Switch>
          <Route exact path="/" component={mainPage} />
          {/* <Route path="DetInform" component={DetInform} /> */}
        </Switch>
      </BrowserRouter>
      
    )
  }
}

export default App