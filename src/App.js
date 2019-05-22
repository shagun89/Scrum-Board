import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Board from './containers/Board';
import Task from './containers/Task';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path='/' component={Board} />
            {/* <Route exact path='/' component={Task} /> */}
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;




























