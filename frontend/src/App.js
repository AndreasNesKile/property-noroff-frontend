import React, { useState, useEffect } from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropertyCatalogue from './components/PropertyCatalogue/PropertyCatalogue';
import UserManagement from './components/UserManagement/UserManagement';

import landingpage from './components/landing-page/landing-page';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import PropertyDetails from './components/property-details/PropertyDetails';
import LoadingSpinner from './components/loading-spinner/LoadingSpinner';
import NavigationBar from './components/NavigationBar/NavigationBar';
import { useAuth0 } from './react-auth0-spa';
import { AnimatePresence, motion } from 'framer-motion';
let jwtDecode = require('jwt-decode');

function App() {
	const { loading, getTokenSilently, isAuthenticated } = useAuth0();
	const [token, setToken] = useState('');
	const [role, setRole] = useState('');

	useEffect(() => {
		if (isAuthenticated && !loading) {
			getToken();
		}
	});
	//this method will get the token and save it in the session storage
	//Following this protocol, the token will be expired once the session is closed
	const getToken = async () => {
		try {
			let fetchedToken = await getTokenSilently();
			setToken(fetchedToken);
			let decoded = jwtDecode(token);
			setRole(decoded['https://property.com/roles']);
			sessionStorage.setItem('token', token);
		} catch (error) {
			console.error(error);
		}
	};
	if (loading) {
		return <LoadingSpinner />;
	}
	//this is where the app will be displayed and routes are defined. the AnimatePresence is for the transition between the routing changes
	return (
		<Router>
			<div className="App">
				<NavigationBar />
				<AnimatePresence>
					<Switch>
						<Route exact path="/properties" component={PropertyCatalogue} />
						<Route
							path="/properties/:id"
							render={(routeProps) => <PropertyDetails role={role} token={token} {...routeProps} />}
						/>
						<Route path="/profile" component={UserManagement} />
						<Route path="/" component={landingpage} />
					</Switch>
				</AnimatePresence>
			</div>
		</Router>
	);
}

export default App;
