import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Import any Font Awesome Icons intended on being used
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSpinner } from '@fortawesome/pro-duotone-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons'

// Import Components
import Navbar from './components/layouts/Navbar'
import Dashboard from './components/Debt/Dashboard'
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import ViewDebt from './components/Debt/viewDebt';
import AddDebt from './components/Debt/addDebt';

library.add(faSpinner, fas);

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
