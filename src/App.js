import React from 'react';
import './App.css';
import Header from './components/header/header.component'
import HomePage from './pages/homepage/homepage.component'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { useHistory } from "react-router-dom";
import ChallengePage from './pages/challenge-page/challenge-page.component';

function App() {
  React.useEffect(() => {
    const qs = window.location.search;
    let c = new URLSearchParams(qs);
    let history = useHistory();
    if (c.get("__loader")) {
      const route = c.get("__loader");
      history.push(route);
      return;
    }
  }, []);
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
