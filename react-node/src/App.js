import React, { Component } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar /> 
        <div className="row"> 
          <div className="col-lg-1 sideContent"></div>
          <div className="col-lg-10 mainContent"> test</div>
          <div className="col-lg-1 sideContent"></div>
        </div>
      </div> 
    );
  }
}

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark row">
      <img src={logo} className="App-logo" alt="logo" />
      <div className="collapse navbar-collapse row">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Page1</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Page2</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Page3</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Page4</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Page5</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Page6</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}


export default App;
