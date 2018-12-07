import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          HIiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii
          <br/>
          {process.env.REACT_APP_TESTMESS}
          <br/><br/>
          {process.env.REACT_APP_TESTMES}
        </header>
      </div>
    );
  }
}

export default App;
