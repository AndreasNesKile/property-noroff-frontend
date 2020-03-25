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
	return (
		<Router>
			<div className="App">
				<NavigationBar />
				<Switch>
					<Route exact path="/properties" component={PropertyCatalogue} />
					<Route
						path="/properties/:id"
						render={(routeProps) => <PropertyDetails role={role} token={token} {...routeProps} />}
					/>
					<Route path="/profile" component={UserManagement} />
					<Route path="/" component={landingpage} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
