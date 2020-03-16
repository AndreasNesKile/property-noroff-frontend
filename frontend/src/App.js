import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Property from './components/Property/Property';
import PropertyCatalogue from './components/PropertyCatalogue/PropertyCatalogue';
import landingpage from './components/landing-page/landing-page';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import PropertyDetails from './components/property-details/PropertyDetails';

function App() {
	return (
		<Router>
			<div className="App">
				<Switch>
					<Route exact path="/" component={landingpage} />
					<Route path="/Properties" component={PropertyCatalogue} />
					<Route path="/Property/:id" component={PropertyDetails} />
					{/* <Route path="/Profile" component={} /> */}
				</Switch>
			</div>
		</Router>
	);
}

export default App;
