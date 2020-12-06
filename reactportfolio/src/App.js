//imports from Boostrap
import React from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import './App.css';

//imports from components
import Footer from "./Components/Footer";
import Homepage from "./pages/Homepage"
import Aboutpage from "./pages/Aboutpage"
import Contactpage from "./pages/Contactpage"

class App extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
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


  render() {

    return (

      <Router>

        <Container className="p-0" fluid={true}>

          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>Mark Aguilar</Navbar.Brand>
            
            <Navbar.Toggle className="border" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route path="/" exact render={() => <Homepage title={this.state.home.title} 
          subtitle={this.state.home.subtitle} text={this.state.home.text} />} />

          <Route path="/about" exact render={() => <Aboutpage title={this.state.about.title} />} />

          <Route path="/contact" exact render={() => <Contactpage title={this.state.contact.title} />} />

          <Footer />

        </Container>

      </Router>

    );
  }
}

export default App;
