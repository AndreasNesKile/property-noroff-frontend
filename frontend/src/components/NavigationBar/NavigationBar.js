import React from "react";
import styles from "./NavigationBar.module.css";

//React Bootstrap
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

class NavigationBar extends React.Component {
  state = {
  }

  render() {
    return (
      <div >
        <Navbar bg="light" fixed="top">
          <Navbar.Brand href="#home"><img className={styles.Logo} src="/property.png"/></Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
          </Nav>
      </Navbar>
      </div>
    );
  }
}

export default NavigationBar;
