import React, { Component } from 'react';
import { Route, Redirect, Switch, Link } from 'react-router-dom';
import Signin from './components/auth/SignIn';
import Signup from './components/auth/SignUp';
class App extends Component {
  render() {
    return (
      <div>
        <header>
          Header
          <Link to='/signin'>Signin</Link>
          <Link to='/signup'>Signup</Link>
        </header>
        <Switch>
          <Route exact path='/signin' component={Signin} />
          <Route exact path='/signup' component={Signup} />
          <Redirect to='/' />
        </Switch>
      </div>
    );
  }
}

export default App;
