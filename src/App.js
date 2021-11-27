import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import MyJobs from './pages/Myjobs'
import JobList from './pages/JobList'
import StartjobDrawer from './pages/startjobs'





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
        <Route exact path="/startjobs">
          <StartjobDrawer />
        </Route>
      </Switch>
    </Router>
  );

}

export default App;
