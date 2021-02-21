import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Works from './Components/Works/Works';
import Top from './Components/Top/Top';
import Maintenance from './Components/MaintenancePage/MaintenancePage';

function App() {
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
