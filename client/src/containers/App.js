import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import '../App.css';
import Meetings from '../components/Meetings'
import Coaches from '../components/Coaches'
import Games from '../components/Games'
import Home from '../components/Home'
import NavBar from '../components/Navbar'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Route exact path="/" component={Home} />
          <Route exact path="/meetings" component={Meetings} />
          <Route exact path="/coaches" component={Coaches} />
          <Route exact path="/games" component={Games} />
        </div>
      </Router>    
    );
  }
}

export default App;
