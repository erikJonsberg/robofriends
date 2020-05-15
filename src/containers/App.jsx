import React from 'react';
import CardList from "../components/Cardlist";
import Searchbox from "../components/Searchbox";
import Scroll from "../components/Scroll";
import './App.css';
import ErrorBoundary from "../components/ErrorBoundary";
import { render } from "@testing-library/react";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
          robots: [],
          searchfield: ''
        };
    }


    componentDidMount() {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        return response.json()
      })
      .then(users => {
      this.setState({robots: users})
    })
  }
    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
        
    }

    render() {
      const {robots, searchfield} = this.state
    const filteredRobots = robots.filter(robot => {
        return robot.name
        .toLowerCase()
        .includes(searchfield.toLowerCase());
    })
    return !robots.length ? (
      <h1>Loading...</h1>
    ) : (
      <React.Fragment>
        <div className="tc light-green">
          <h1 className="f1">RoboFriends</h1>
          <Searchbox searchChange={this.onSearchChange} />
        </div>
        <Scroll>
          <ErrorBoundary>
            <CardList robots={filteredRobots} />
          </ErrorBoundary>
        </Scroll>
      </React.Fragment>
    );
    }
  }

export default App;