import React, { Component } from 'react';
import Navbar from './Components/Layout/Navbar';
import Users from './Components/Users/Users';
import axios from 'axios'
import './App.css';

class App extends Component{
  static defaultProps = {
    icon : "fab fa-github",
    title: " Github Finder"
  }

  state = {
    users  : [],
    loading: false
  }

  async componentDidMount(){
    this.setState({ loading: true })
    var resp = await axios.get(`https://api.github.com/users?client_id=${ process.env.GITHUB_ID}&client_secret=${ process.env.GITHUB_SECRET }`)
    this.setState({ loading: false, users: resp.data })
  }

  render(){
    return(
      <div>
        <Navbar
          icon  = "fab fa-github"
          title = " Github Finder"
        />
        <div className="container">
          <Users 
            loading = { this.state.loading }
            users   = { this.state.users }
          />
        </div>
      </div>
    )
  }
}

export default App;
