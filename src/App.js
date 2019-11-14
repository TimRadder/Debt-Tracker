import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// Import Components
import Navbar from './components/layouts/Navbar'
import Dashboard from './components/Debt/Dashboard'
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import ViewDebt from './components/Debt/viewDebt';
import AddDebt from './components/Debt/addDebt';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/debt' component={ViewDebt} />
          <Route path='/addDebt' component={AddDebt} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
