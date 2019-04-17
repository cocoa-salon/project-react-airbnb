import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Main } from './Main/Main'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <h3>this is App area</h3>
          <Main />
        </div>
      </Router>
    );
  }
}

export default App;