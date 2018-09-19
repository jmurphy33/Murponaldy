import React, { Component } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';


const books = [
  { id: 0, title: "Harry Potter 1", published: "", author: "", description: "", genre: "", ageRestriction: "" },
  { id: 1, title: "Harry Potter 2", published: "", author: "", description: "", genre: "", ageRestriction: "" },
  { id: 2, title: "Harry Potter 3", published: "", author: "", description: "", genre: "", ageRestriction: "" },
  { id: 3, title: "Harry Potter 4", published: "", author: "", description: "", genre: "", ageRestriction: "" },
  { id: 4, title: "Harry Potter 5", published: "", author: "", description: "", genre: "", ageRestriction: "" },
  { id: 5, title: "Harry Potter 6", published: "", author: "", description: "", genre: "", ageRestriction: "" },
  { id: 6, title: "Lord of The Rings 1", published: "", author: "", description: "", genre: "", ageRestriction: "" },
  { id: 7, title: "Lord of The Rings 2", published: "", author: "", description: "", genre: "", ageRestriction: "" },
  { id: 8, title: "Lord of The Rings 3", published: "", author: "", description: "", genre: "", ageRestriction: "" },
  { id: 9, title: "Game of Thrones 1", published: "", author: "", description: "", genre: "", ageRestriction: "" },
  { id: 10, title: "Game of Thrones 2", published: "", author: "", description: "", genre: "", ageRestriction: "" },
  { id: 11, title: "Game of Thrones 3", published: "", author: "", description: "", genre: "", ageRestriction: "" },
  { id: 12, title: "Game of Thrones 4", published: "", author: "", description: "", genre: "", ageRestriction: "" },
  { id: 13, title: "Game of Thrones 5", published: "", author: "", description: "", genre: "", ageRestriction: "" },
  { id: 14, title: "Game of Thrones 6", published: "", author: "", description: "", genre: "", ageRestriction: "" },
  { id: 15, title: "Game of Thrones 7", published: "", author: "", description: "", genre: "", ageRestriction: "" },
  { id: 16, title: "Goosebumps 1", published: "", author: "", description: "", genre: "", ageRestriction: "" },
  { id: 17, title: "Goosebumps 2", published: "", author: "", description: "", genre: "", ageRestriction: "" },
  { id: 18, title: "Goosebumps 3", published: "", author: "", description: "", genre: "", ageRestriction: "" },
  { id: 19, title: "Goosebumps 3", published: "", author: "", description: "", genre: "", ageRestriction: "" },
  { id: 20, title: "Marvel 1", published: "", author: "", description: "", genre: "", ageRestriction: "" },
  { id: 21, title: "DC 2", published: "", author: "", description: "", genre: "", ageRestriction: "" },
  { id: 22, title: "IT", published: "", author: "", description: "", genre: "", ageRestriction: "" },
  { id: 23, title: "The Shinning", published: "", author: "", description: "", genre: "", ageRestriction: "" },
  { id: 24, title: "Private Peaceful", published: "", author: "", description: "", genre: "", ageRestriction: "" },
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="row">
          <div className="col-lg-1 sideContent"></div>
          <div className="col-lg-10 mainContent">

            <div className="row">
              <BooksDiv />
            </div>

          </div>
          <div className="col-lg-1 sideContent"></div>
        </div>
      </div>
    );
  }
}

function BooksDiv() {
  var renderOutput = null;

  renderOutput = books.map(item =>
    <div className="col-lg-1 col-md-1 col-sm-1">
      <label>{item.title}</label>
    </div>
  );

  return (<span>{renderOutput}</span>)
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
