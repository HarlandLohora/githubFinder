import React, { Component } from 'react';
import Navbar from './Components/Layout/Navbar';
import Users  from './Components/Users/Users';
import Search from './Components/Search';

import axios from 'axios'
import './App.css';

class App extends Component{
  static defaultProps = {
    icon : "fab fa-github",
    title: " Github Finder"
  }

  state = {
    users   : [],
    allUsers: [],
    loading : false
  }

  async componentDidMount(){
    this.setState({ loading: true })
    const resp = await axios.get(`https://api.github.com/users?client_id=${ process.env.GITHUB_ID}&client_secret=${ process.env.GITHUB_SECRET }`)
    this.setState({ loading: false, users: resp.data, allUsers: resp.data })
  }
  searchUsers = async text => {
    this.setState({ loading: true })
    const resp = await axios.get(`https://api.github.com/search/users?q=${ text }&client_id=${ process.env.GITHUB_ID}&client_secret=${ process.env.GITHUB_SECRET }`)
    this.setState({ loading: false, users: resp.data.items })
  }
  clearUsers = () => {
    this.setState({ users: this.state.allUsers })
  }
  render(){
    return(
      <div>
        <Navbar
          icon  = "fab fa-github"
          title = " Github Finder"
        />
        <div className="container">
          <Search
            searchUsers = { this.searchUsers }
            clearUsers  = { this.clearUsers  }
          />
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
