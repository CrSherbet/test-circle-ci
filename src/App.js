import React, { Component } from 'react';
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
          <img src='https://i0.wp.com/www.wwhf.org/wp-content/uploads/2014/04/bokeh-cover-bg.jpg?ssl=1' alt='pic' />
          <button onClick={() => alert('kickkkk')} >Kick MEEEE!</button>
        </header>
      </div>
    );
  }
}

export default App;
