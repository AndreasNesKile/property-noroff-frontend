import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={} />
          <Route path="/Properties" component={} />
          <Route path="/Property/:id" component={} />
          <Route path="/Profile" component={} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
