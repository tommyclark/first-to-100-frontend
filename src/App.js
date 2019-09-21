import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Scores from './components/Scores';
import Home from './components/Home';
import Team from "./components/Team";
import Answer from "./components/Answer";
import Challenge from "./components/Challenge";

function App() {
  return (
    <Router>
        <div className="App">
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/scores' component={Scores} />
              <Route path='/team' component={Team} />
              <Route path='/challenge' component={Challenge} />
              <Route path='/answer' component={Answer} />
          </Switch>
        </div>
    </Router>
  );
}

export default App;
