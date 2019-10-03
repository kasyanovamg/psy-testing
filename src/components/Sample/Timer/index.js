import React, { Component } from 'react';
import { connect } from 'react-redux';
import {setTime} from '../../../actions/testHelpers';

class Timer extends Component {
  state = {
    timer: null,
    counter: 0
  };

  tick = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  };

  componentDidMount() {
    let timer = setInterval(this.tick, 1000);
    this.setState({ timer });
  }
  componentWillUnmount() {
    this.props.setTime(this.state.counter);
    clearInterval(this.state.timer);
  }

  render() {
    return (
      <div className='timer'>
        {this.state.counter} сек.
      </div>
    )

  }
}

const actions = {
  setTime
};

export default connect(
  null,
  actions
)(Timer);