import React, { Component } from 'react';
import ItemPicker from './ItemPicker'
import BuildArea from './BuildArea'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ItemPicker/>
      </div>
    );
  }
}

export default App;
