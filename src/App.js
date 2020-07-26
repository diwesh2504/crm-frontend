import React from 'react';
import LandingPage from './Pages/LandingPage';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import AdminView from './View/AdminView';
import AdminLogin from './Pages/AdminLogin';
import EmployeeView from './View/EmployeeView';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage}/>
        <Route path="/adminview" component={AdminView} props={AdminLogin}/>
        <Route path="/employeeview" component={EmployeeView}/>
      </Switch>
    </Router>
   
  );
}

export default App;
