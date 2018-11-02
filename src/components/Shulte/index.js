import React, { Component } from 'react';
import Instructions from '../Instructions';
import Timer from '../Timer';
import Table from './Table';
import './styles.css';

class Shulte extends Component {
    // numbers = Array(25).fill().map((e, i) => i + 1);

    // compareRandom = () => {
    //     return Math.random() - 0.5;
    // }

    // //time counter
    // timer_start = false;
    // second = 0;
    // min = 0;
    // timeCounter;
    // control_num = 1;
    // training = true;
    // error_count = 0;

    // countTime = () => {
    //     this.timeCounter = setInterval(() => {
    //         let zero;
    //         this.second++;
    //         if (this.second === 59) {
    //             this.second = 0;
    //             this.min++;
    //         }
    //         if (this.second > 9) {
    //             zero = '';
    //         } else if (this.second <= 9) {
    //             zero = 0;
    //         }
    //         document.querySelector('.timer').innerText = `Timer: ${this.min}:${zero}${this.second}`
    //     }, 1000);
    // };

    // verifyNum = (num) => {
    //     if (this.control_num <= 25) {
    //         if (num === this.control_num) {
    //             console.log("clicked:", num, "control num: ", this.control_num);
    //             if (num === 25) {
    //                 let zero;
    //                 if (this.second > 9) {
    //                     zero = '';
    //                 } else if (this.second <= 9) {
    //                     zero = 0;
    //                 }
    //                 document.querySelector('.message').innerText =
    //                     `Ваше время: ${this.min}:${zero}${this.second}, ${this.error_count} ошибок`;
    //                 clearInterval(this.timeCounter);
    //                 this.timer_start = false;
    //                 this.second = 0;
    //                 this.min = 0;
    //                 console.log("Training is over");
    //                 this.training = false;
    //             } else {
    //                 document.querySelector('.message').innerText = `Продолжайте`;
    //                 this.control_num = this.control_num + 1;
    //             }

    //         } else {
    //             if (this.training) {
    //                 this.error_count++;
    //                 document.querySelector('.message').innerText = `Ошибка, нужное число: ${this.control_num}`;
    //                 console.log("clicked:", num, "control num: ", this.control_num);
    //             }
    //         }
    //     }
    // }

    // drawTable = () => {
    //     let splitNumbers = []
    //     this.numbers.sort(this.compareRandom);
    //     splitNumbers.push(this.numbers.slice(0, 5));
    //     splitNumbers.push(this.numbers.slice(5, 10));
    //     splitNumbers.push(this.numbers.slice(10, 15));
    //     splitNumbers.push(this.numbers.slice(15, 20));
    //     splitNumbers.push(this.numbers.slice(20, 25));


    //     const tableContainer = document.querySelector('.table');
    //     while (tableContainer.firstChild) {
    //         tableContainer.removeChild(tableContainer.firstChild);
    //     }
    //     const tbl = document.createElement('table');
    //     // tbl.style.width = '100px';
    //     tbl.style.border = '1px solid black';

    //     for (let i = 0; i < splitNumbers.length; i++) {
    //         let tr = tbl.insertRow();
    //         for (let j = 0; j < splitNumbers[i].length; j++) {

    //             let td = tr.insertCell();
    //             td.appendChild(document.createTextNode(splitNumbers[i][j]));
    //             td.style.border = '1px solid black';
    //             td.addEventListener('click', () => {
    //                 // console.log(splitNumbers[i][j])
    //                 this.verifyNum(splitNumbers[i][j])
    //             })
    //         }
    //     }
    //     tableContainer.appendChild(tbl);
    // }
    // init = () => {
    //     clearInterval(this.timeCounter);
    //     this.timer_start = false;
    //     this.second = 0;
    //     this.min = 0;

    //     if (this.timer_start === false) {
    //         this.countTime();
    //         this.timer_start = true;
    //     }
    //     this.drawTable();
    // }
    render() {
        return (
            <div className='contents'>
                <p>Тренировка различных аспектов внимания</p>
                <Instructions message={'Начните поиск цифр от 1 до 25'} startTraining={this.props.startTraining} />
                {this.props.start &&
                    <React.Fragment>
                        <Table />
                        <Timer />
                    </React.Fragment>
                }

            </div>
        );
    }
}

export default Shulte;