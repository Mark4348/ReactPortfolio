import logo from './logo.svg';
import './App.css';
import React from "react";

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
  <div>Hello world</div>
    );
  }
}

export default App;
