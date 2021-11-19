import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import MyJobs from './pages/Myjobs'




function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route exact path="/Myjobs">
          <MyJobs />
        </Route>
      </Switch>
    </Router>
  );

}

export default App;
