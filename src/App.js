import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Import any Font Awesome Icons intended on being used
import { library } from '@fortawesome/fontawesome-svg-core';
import { fad } from '@fortawesome/pro-duotone-svg-icons';
import { fas } from '@fortawesome/pro-solid-svg-icons'
import { fal } from '@fortawesome/pro-light-svg-icons'
import { far } from '@fortawesome/pro-regular-svg-icons'


// Import Components
import Navbar from './components/layouts/Navbar'
import Dashboard from './components/Debt/Dashboard'
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import ViewDebt from './components/Debt/viewDebt';
import AddDebt from './components/Debt/addDebt';


import FormTest from './components/layouts/FormTest';

library.add(fad, fas, fal, far);

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route exact path='/form' component={FormTest} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/debt/:id' component={ViewDebt} />
          <Route path='/addDebt' component={AddDebt} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
