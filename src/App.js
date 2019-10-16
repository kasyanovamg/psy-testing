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
import ShulteRed from './components/Sample/ShulteRed';
import Perception from './components/Sample/Perception';
import Count from './components/Sample/Count';
import MemoryWords from './components/Sample/MemoryWords';
import Navbar from './components/Navbar';
import CurrentSummary from './components/CurrentSummary';
import './styles.css';

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Switch>
          <Route exact path={process.env.PUBLIC_URL + '/'} component={Home} />
          <Route exact path={process.env.PUBLIC_URL + '/signin'} component={Signin} />
          <Route exact path={process.env.PUBLIC_URL + '/signup'} component={Signup} />
          <Route exact path={process.env.PUBLIC_URL + '/test'} component={Test} />
          <Route exact path={process.env.PUBLIC_URL + '/train'} component={Train} />
          <Route exact path={process.env.PUBLIC_URL + '/profile'} component={Summary} />
          <Route exact path={process.env.PUBLIC_URL + '/summary'} component={Summary} />
          <Route exact path={process.env.PUBLIC_URL + '/test/sample'} component={Sample} />
          <Route exact path={process.env.PUBLIC_URL + '/test/shulte'} component={Shulte} />
          <Route exact path={process.env.PUBLIC_URL + '/test/shulte-red'} component={ShulteRed} />
          <Route exact path={process.env.PUBLIC_URL + '/test/perception'} component={Perception} />
          <Route exact path={process.env.PUBLIC_URL + '/test/count'} component={Count} />
          <Route exact path={process.env.PUBLIC_URL + '/test/memory-words'} component={MemoryWords} />
          <Route exact path={process.env.PUBLIC_URL +  '/test/current-summary'} component={CurrentSummary} />
          <Redirect to={process.env.PUBLIC_URL + '/'}  />
        </Switch>
      </>
    );
  }
}

export default App;
