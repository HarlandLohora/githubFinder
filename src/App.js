import React, { Component } from 'react';
import Navbar from './Components/Layout/Navbar';
import Users from './Components/Users/Users'
import './App.css';

class App extends Component{
  static defaultProps = {
    icon : "fab fa-github",
    title: " Github Finder"
  }
  render(){
    return(
      <div>
        <Navbar
          icon  = "fab fa-github"
          title = " Github Finder"
        />
        <div className="container">
          <Users />
        </div>
      </div>
    )
  }
}

export default App;
