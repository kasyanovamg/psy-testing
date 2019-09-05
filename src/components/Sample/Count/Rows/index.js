import React, {Component} from 'react';
import {Numbers} from "../Numbers";
import TimerReverse from "../../TimerReverse";
import {lineLength} from '../../Count'

export class Rows extends Component {
  state = {
    [this.props.row] : null,
  }

  rowAnswer = (ans) => {
    this.setState(state => ({...state, [this.props.row]: state[this.props.row].concat(ans) }))
  }

  submitRow = () => {
    const {startNextRow, row} = this.props;
    startNextRow(row + 1);
  }

  render() {
    const {row, currentRow, time, setAnswer, startNextRow} = this.props;
    return (
      <div className='number-container'>
      {
        Array(lineLength).fill().map((number, j) => (
          <Numbers
            row={row}
            key={j}
            elIndex={j}
            disabled={row !== currentRow}
            lineLength={lineLength}
            setAnswer={this.rowAnswer}
          />
        ))
      }
      <button onClick={this.submitRow}>Next Line</button>

      {row === currentRow &&
      <TimerReverse maxTime={time} passedFunction={this.submitRow}/>
      }

    </div>
    )
  }
}