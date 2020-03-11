import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import landingpage from './components/landing-page/landing-page';
import PropertyDetails from './components/property-details/PropertyDetails';

function App() {
	return (
		<Router>
			<div className="App">
				<Switch>
					<Route exact path="/" component={landingpage} />
					{/* <Route path="/Properties" component={} /> */}
					<Route path="/Property/:id" component={PropertyDetails} />
					{/* <Route path="/Profile" component={} /> */}
				</Switch>
			</div>
		</Router>
	);
}

export default App;
