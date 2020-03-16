import React from "react";
import styles from "./NavigationBar.module.css";
import {Link} from "react-router-dom"

//React Bootstrap
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

class NavigationBar extends React.Component {
  state = {
  }

  render() {
    return (
      <div className={styles.NavContainer}>
        <Navbar bg="light" fixed="top">
          <Link to="/Properties"><Navbar.Brand><img width="60" className="d-inline-block align-top" src="/property.png"/></Navbar.Brand></Link>
          <Nav className="mr-auto">
            <Link to="/Properties"><Nav>Home</Nav></Link>
          </Nav>
          <Nav className="mr-sm-2">
            <Link to="/Profile"><Nav><img width="25" className="d-inline-block align-top" src="/user.png"/></Nav></Link>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default NavigationBar;
