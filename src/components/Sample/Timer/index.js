import React, { Component } from 'react';

class Timer extends Component {
    state = {
        timer: null,
        counter: 0
    };
   
    tick = () => {
        this.setState({
            counter: this.state.counter + 1
        });
    }

    componentDidMount() {
        let timer = setInterval(this.tick, 1000);
        this.setState({ timer });
    }
    componentWillUnmount() {
        this.props.getTime(this.state.counter);
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


export default Timer;