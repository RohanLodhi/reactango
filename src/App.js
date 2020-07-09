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

class App extends React.Component {
  componentDidMount() {
    const qs = window.location.search;
    let c = new URLSearchParams(qs);
    if (c.get('__loader')) {
      const route = c.get('__loader');
      let history = useHistory();
      history.push(route);
      return;
    }
  }
  render() {
    return(
      <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/'>
            <HomePage />
          </Route>
          <Route path='/:id'>
              <ChallengePage />
          </Route>
        </Switch>
      </div>
    </Router>
    )
  };
}

export default App;
