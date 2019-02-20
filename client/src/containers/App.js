import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import '../App.css';
import NavBar from '../components/Navbar'
import Footer from '../components/Footer';
import { connect } from 'react-redux'
import { getMeets } from '../actions/meetings'

class App extends Component {

  componentDidMount() {
    this.props.getMeets()
  }

  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Footer />
        </div>
      </Router>    
    );
  }
}

export default connect(null, { getMeets })(App);
