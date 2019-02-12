import React, { Component } from 'react';
import { Route, Redirect, Switch, Link } from 'react-router-dom';
import Home from './components/Home';
import Signin from './components/auth/SignIn';
import Signup from './components/auth/SignUp';
import Test from './components/Test';
class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/signin' component={Signin} />
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/test' component={Test} />
        <Redirect to='/' />
      </Switch>
    );
  }
}

export default App;
