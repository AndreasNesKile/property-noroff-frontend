import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Property from "./components/Property/Property"
import PropertyCatalogue from "./components/PropertyCatalogue/PropertyCatalogue"
import UserManagement from "./components/UserManagement/UserManagement"
import landingpage from './components/landing-page/landing-page';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={landingpage} />
          <Route path="/Property/:id" component={Property} />
          <Route path="/Properties" component={PropertyCatalogue} />
          <Route path="/Profile" component={UserManagement} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
