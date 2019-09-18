import React, {Component} from 'react';
import {Numbers} from "../Numbers";
import TimerReverse from "../../TimerReverse";
import {lineLength} from '../../Count'

export class Rows extends Component {
  state = {
    [this.props.row]: [],
  }

  rowAnswer = (ans) => {
    this.setState(state => ({...state, [this.props.row]: state[this.props.row].concat(ans)}))
  }

  submitRow = () => {
    const {startNextRow, row} = this.props;
    this.props.setAnswer(this.state[this.props.row])
    startNextRow(row + 1);
  }

  submitLastRow = () => {
    this.submitRow();
    this.props.endTraining();

  }

  render() {
    const {row, currentRow, time, rowLength } = this.props;
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
        {rowLength === row ? <button onClick={this.submitLastRow}>Готово</button> : <button onClick={this.submitRow}>Следующая строка</button>}
        <div className='timer-container'>
          {row === currentRow &&
          <TimerReverse maxTime={time} passedFunction={rowLength === row ? this.submitLastRow : this.submitRow}/>
          }
        </div>
      </div>
    )
  }
}