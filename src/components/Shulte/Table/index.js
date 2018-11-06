import React, { Component } from 'react';
import './styles.css'

class Table extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return false
    }
    tableLength = 25;
    numbers = Array(this.tableLength).fill().map((e, i) => i + 1);
    userNumbers = [0];
    cellVerify = (cell) => {
        this.props.error(false);
        if (this.userNumbers.slice(-1)[0] + 1 === cell) {
            this.userNumbers.push(cell);
            if (this.userNumbers.slice(-1)[0] === this.tableLength) {
                this.props.end(true)
            }
        }
        else {
            this.props.error(true);
        }
        // console.log(this.userNumbers)
    }
    render() {
        return (
            <div className='table' >
                {
                    this.numbers.sort(() => Math.random() - 0.5).map((e) =>
                        <div key={e} onClick={() => this.cellVerify(e)} className='cell'>{e}</div>)
                }
            </div>
        )
    }

}

export default Table;