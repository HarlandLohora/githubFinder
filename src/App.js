import React, { Component } from 'react';
import Navbar from './Components/Layout/Navbar';
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
      </div>
    )
  }
}

export default App;
