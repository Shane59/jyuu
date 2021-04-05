// this is for maintenance
import Maintenance from './Components/MaintenancePage/MaintenancePage';
import React, { useEffect } from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Works from './Components/Works/Works';
import Top from './Components/Top/Top';
import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';
import { initGA, GApageView } from './index';

// const TRACKING_ID = "G-Y4W59DCDL1";

// ReactGA.initialize(TRACKING_ID);

// const history = createBrowserHistory();

// Initialize google analytics page view tracking
// history.listen(location => {
//   console.log('page history');
  
//   ReactGA.set({ page: location.pathname });
//   ReactGA.pageview('/');
// });

function App() {
  // useEffect(() => { initGA(); }, []);
  // useEffect(() => { GApageView("landing"); }, []);
  return (
    <Router>
      <div className="App">
        <Switch>
          {/* <Route exact path='*' component={Maintenance} /> */}
          <Route exact path='/' component={Top} />
          <Route exact path='/works' component={Works} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
