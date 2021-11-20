import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import MyJobs from './pages/Myjobs'
import JobList from './pages/JobList'




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
        <Route exact path="/JobList">
          <JobList />
        </Route>
      </Switch>
    </Router>
  );

}

export default App;
