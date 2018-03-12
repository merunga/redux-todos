import React, { Component } from 'react';
import Calculator from './Calculator';
import store from './store/';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Calculator store={store} />
      </div>
    );
  }
}

export default App;
