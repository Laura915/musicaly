import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Nav from './components/Nav';
import Register from './pages/Register';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div>
      <Nav/>
      <Switch>
      <Route exact path="/" component={Home} /> 
      <Route exact path="/register" component={Register} /> 
      </Switch>
      </div>
    </Router>
    
  );
}

export default App;
