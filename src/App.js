import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Well, Alert } from 'react-bootstrap';
import AlertDismissable from './AlertDismissable'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Well>I am Mandvi Singh</Well>
        <Alert bsStyle="warning">
          <strong>Holy guacamole!</strong> Best check yo self, you're not looking too
          good.
        </Alert>
        <AlertDismissable/>

      </div>
    );
  }
}

export default App;
