import React, { Component } from 'react';
import './styles.css'

class Table extends Component {
    tableLength = 25;
    numbers = Array(this.tableLength).fill().map((e, i) => i + 1).sort(() => Math.random() - 0.5)
    userNumbers = [0];
    cellVerify = (cell) => {
        this.props.error(false);
        if (this.userNumbers.slice(-1)[0] + 1 === cell) {
            this.userNumbers.push(cell);
            if (this.userNumbers.slice(-1)[0] === this.tableLength) {
                this.props.end(true);
            }
        }
        else {
            this.props.error(true);
            if (this.userNumbers.length <= this.tableLength && cell !== 25 ) {
                this.props.errorCounter(1);
            }
        }
    }
    render() {
        return (
            <div className='table' >
                {
                    this.numbers.map((e) =>
                        <div key={e} onClick={() => this.cellVerify(e)} className='cell'>{e}</div>)
                }
            </div>
        )
    }
}

export default Table;