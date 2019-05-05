import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Home from './components/Home';
import Signin from './components/auth/SignIn';
import Signup from './components/auth/SignUp';
import Test from './components/Test';
import Summary from './components/Summary';
import Train from './components/Train';
import Sample from './components/Sample';
import Shulte from './components/Sample/Shulte';
import Perception from './components/Sample/Perception';
import Navbar from './components/Navbar';
import './styles.css';

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Switch>
          <Route exact path='/psy-testing' component={Home} />
          <Route exact path='/signin' component={Signin} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/test' component={Test} />
          <Route exact path='/train' component={Train} />
          <Route exact path='/profile' component={Summary} />
          <Route exact path='/summary' component={Summary} />
          <Route exact path='/test/sample' component={Sample} />
          <Route exact path='/test/shulte' component={Shulte} />
          <Route exact path='/test/perception' component={Perception} />
          <Redirect to='/psy-testing' />
        </Switch>
      </>
    );
  }
}

export default App;
