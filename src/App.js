import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Latest from './Latest';
import Popular from './Popular';
import Content from './Content';

class App extends Component {
  render() {
    return(
      <div className="App">
      <Header />
      <Latest />
      <Popular />
      <Content />
      </div>
    );
  }
}

export default App;
