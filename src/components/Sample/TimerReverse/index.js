import React, { Component } from 'react';
import { connect } from 'react-redux';
//import {setTime} from '../../../actions/testHelpers';

class TimerReverse extends Component {
  state = {
    timer: null,
    counter: this.props.maxTime
  };

  tick = () => {
    if (this.state.counter > 1) {
      this.setState({
        counter: this.state.counter - 1
      })
    } else  {
      this.setState({
        counter: this.state.counter - 1
      });
      this.props.passedFunction();
      clearInterval(this.state.timer);
    }
  };

  componentDidMount() {
    let timer = setInterval(this.tick, 1000);
    this.setState({ timer });
  }
  componentWillUnmount() {
    //this.props.setTime(this.state.counter); - не нужно в рамках обратного отчета
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

const mapStateToProps = (state, props) => {
  return {

  }
}

const actions = {
  //setTime
};

export default connect(
  mapStateToProps,
  actions
)(TimerReverse);