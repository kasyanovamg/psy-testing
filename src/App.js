import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Shulte from './components/Shulte';
import ShulteRB from './components/Shulte-r-b';
import Home from './components/Home';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="page">

        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/shulte' component={Shulte} />
          <Route exact path='/shulte-r-b' component={ShulteRB} />

          <Redirect to='/' />
        </Switch>


      </div>
    );
  }
}

export default App;
