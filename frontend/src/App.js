import React from 'react';
import './App.css';
import Property from "./components/Property/Property"
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Property} />
         {/* <Route path="/Properties" component={} />
          <Route path="/Property/:id" component={} />
          <Route path="/Profile" component={} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
