import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Property from "./components/Property/Property"
import landingpage from './components/landing-page/landing-page';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={landingpage} />
          <Route path="/Property/:id" component={Property} />
          {/* <Route path="/Properties" component={} />
          
          <Route path="/Profile" component={} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
