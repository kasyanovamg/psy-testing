import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import ShulteContainer from './containers/ShulteContainer';
import PerceptionOneContainer from './containers/PerceptionOneContainer';
import Home from './components/Home';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="page">

        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/shulte' component={ShulteContainer} />
          <Route exact path='/perception1' component={PerceptionOneContainer} />

          <Redirect to='/' />
        </Switch>


      </div>
    );
  }
}

export default App;
