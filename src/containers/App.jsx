import React from 'react';
import { connect } from 'react-redux';
import CardList from "../components/Cardlist";
import Searchbox from "../components/Searchbox";
import Scroll from "../components/Scroll";
import './App.css';
import ErrorBoundary from "../components/ErrorBoundary";
import { render } from "@testing-library/react";

import { setSearchField, requestRobots } from '../actions';

const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
  onRequestRobots: () => dispatch(requestRobots())
  }
};

class App extends React.Component {
    constructor() {
        super();
        this.state = {
          robots: [],
        };
    }


    componentDidMount() {
      this.props.onRequestRobots();
  }

    render() {
      const { searchField, onSearchChange, robots, isPending } = this.props;
    const filteredRobots = robots.filter(robot => {
        return robot.name
        .toLowerCase()
        .includes(searchField.toLowerCase());
    })
    return isPending ? (
        <h1>Loading...</h1>
    ) : (
      <React.Fragment>
        <div className="tc light-green">
          <h1 className="f1">RoboFriends</h1>
          <Searchbox searchChange={onSearchChange} />
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

export default connect(mapStateToProps, mapDispatchToProps)(App);