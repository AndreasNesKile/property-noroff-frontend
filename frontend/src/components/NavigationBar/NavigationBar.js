import React from 'react';
import styles from './NavigationBar.module.css';
import { Link } from 'react-router-dom';
import { useAuth0 } from '../../react-auth0-spa.js';

//React Bootstrap
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
const NavigationBar = () => {
	const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

	return (
		<div className={styles.NavContainer}>
			<Navbar bg="light" fixed="top" className={styles.navbar}>
				<Link to="/properties">
					<Navbar.Brand>
						<img width="60" className="d-inline-block align-top" src="/property.png" alt="logo" />
					</Navbar.Brand>
				</Link>
				<Nav className="mr-auto">
					<Link to="/properties">
						<Nav>Home</Nav>
					</Link>
				</Nav>
				<Nav className="mr-sm-2">
					<Link to="/profile">
						<Nav>
							<img width="25" className="d-inline-block align-top" src="/user.png" alt="profile" />
						</Nav>
					</Link>
				</Nav>
				<Nav>
					<div>
						{!isAuthenticated && <button onClick={() => loginWithRedirect({})}>Log in</button>}

						{isAuthenticated && <button onClick={() => logout()}>Log out</button>}
					</div>
				</Nav>
			</Navbar>
		</div>
	);
};

export default NavigationBar;
