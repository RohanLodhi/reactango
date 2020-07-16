import React from 'react';
import './App.css';
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ChallengePage from './pages/challenge-page/challenge-page.component';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/:id">
            <ChallengePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


export default App;
