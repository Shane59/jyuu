// this is for maintenance
import Maintenance from './Components/MaintenancePage/MaintenancePage';
import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Works from './Components/Works/Works';
import Top from './Components/Top/Top';

import ReactGA from 'react-ga';

function App() {
  useEffect(() => {
    ReactGA.initialize('G-Y4W59DCDL1');

    // to report page view
    ReactGA.pageview('/');
  });
  
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
