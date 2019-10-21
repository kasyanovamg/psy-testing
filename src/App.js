import React, { Component } from 'react';
import { Route, Redirect, Switch, HashRouter } from 'react-router-dom';
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
      <HashRouter basename='/'>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/signin' component={Signin} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/test' component={Test} />
          <Route exact path='/train' component={Train} />
          <Route exact path='/profile' component={Summary} />
          <Route exact path='/summary' component={Summary} />
          <Route exact path='/test/sample' component={Sample} />
          <Route exact path='/test/shulte' component={Shulte} />
          <Route exact path='/test/shulte-red' component={ShulteRed} />
          <Route exact path='/test/perception' component={Perception} />
          <Route exact path='/test/count' component={Count} />
          <Route exact path='/test/memory-words' component={MemoryWords} />
          <Route exact path='/test/current-summary' component={CurrentSummary} />
          <Redirect to='/' />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
