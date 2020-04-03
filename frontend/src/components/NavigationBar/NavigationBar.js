import React from 'react';
import styles from './NavigationBar.module.css';
import { Link, NavLink } from 'react-router-dom';
import { useAuth0 } from '../../react-auth0-spa.js';

//React Bootstrap
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
const NavigationBar = (props) => {
	const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
	// A variable to check if we are in the prroperties route
	let isCatalogue =
		window.location.href.toLowerCase().endsWith('/properties') ||
		window.location.href.toLowerCase().endsWith('/properties/')
			? true
			: false;

	return (
		<div className={styles.NavContainer}>
			<Navbar bg="light" fixed="top" className={styles.navbar}>
				<NavLink to="/">
					<Navbar.Brand>
						<img width="100" className="d-inline-block align-top" src="/property-navbar.png" alt="logo" />
					</Navbar.Brand>
				</NavLink>
				<Nav className="mr-auto">
					{/* a NavLink thats disabled on the pointer event if the current route is properties */}
					<NavLink to="/properties" className={isCatalogue ? 'disableOnActive' : ''}>
						<Nav>
							<span className={styles.navButton}>Home</span>
						</Nav>
					</NavLink>
				</Nav>
				{isAuthenticated && (
					<Nav className="mr-sm-2">
						<Link to="/profile">
							<Nav>
								<img width="25" className="d-inline-block align-top" src="/user.png" alt="profile" />
							</Nav>
						</Link>
					</Nav>
				)}
				{/* A Button that will show log in/out depending on the bool value of isAuthenticated */}
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
