// this is for maintenance
import Maintenance from './Components/MaintenancePage/MaintenancePage';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Works from './Components/Works/Works';
import Top from './Components/Top/Top';
import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';

const TRACKING_ID = "G-Y4W59DCDL1";

ReactGA.initialize(TRACKING_ID);

const history = createBrowserHistory();

// Initialize google analytics page view tracking
history.listen(location => {
  ReactGA.set({ page: location.pathname }); // Update the user's current page
  ReactGA.pageview(location.pathname); // Record a pageview for the given page
});

function App() {
  return (
    <Router history={history}>
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
