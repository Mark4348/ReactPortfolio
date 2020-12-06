//imports from Boostrap
import React from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

//imports from my components
import Footer from "./Components/Footer";
import './App.css';

class App extends React.Component {

  constructor(props){

    super(props);

    this.state={
      title: "Mark Aguilar",
      headerLinks: [
        { title: "Home", path: "/" },
        { title: "About", path: "/about" },
        { title: "Contact", path: "/contact" },
      ],
      home: {
        title: "Be Relentless",
        subtitle: "Projects that inspire",
        text: "Check out my projects below"
      },
      about: {
        title: "A journey of perpetual learning"
      },
      contact: {
        title: "Connect With Me!"  
      }
    }
  }


  render(){

  return (

      <Router>

        <Container className="p-0" fluid={true}>

          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>Mark Aguilar</Navbar.Brand>
            <Navbar.Toggle className="border" aria-controls="navbar-toggle"/>
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/">About</Link>
                <Link className="nav-link" to="/">Contact</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          
          <Footer />

        </Container>

      </Router>

    );
  }
}

export default App;
