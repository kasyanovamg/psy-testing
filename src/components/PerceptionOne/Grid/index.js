import React, { Component } from 'react';
import './styles.css'

class Grid extends Component {

    letters = Array(252).fill('н');
    newLetters = Array(4).fill('и');
    longLetters = this.letters.concat(this.newLetters).sort(() => Math.random() - 0.5);
    
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
        }
    }
    render() {
       // this.letters.push('и');
       
      //  this.letters.sort(() => Math.random() - 0.5);
     
        return (
            <div className='grid' >
                {
                   this.longLetters.map((e, i) =>
                       <div key={i} onClick={() => {}} className='letter'>{e}</div>)
                }
            </div>
        )
    }

}

export default Grid;