import React, { Component } from 'react';
import './styles.css';

class ShulteRB extends Component {
    numbers = ['r1','r2','r3','r4','r5','r6','r7','r8','r9','r10','r11','r12','r13','b1','b2','b3','b4','b5','b6','b7','b8','b9','b10','b11','b12']
    compareRandom = () => {
        return Math.random() - 0.5;
    }

    //time counter
    timer_start = false;
    second = 0;
    min = 0;
    timeCounter;
    control_num = 1;
    training = true;
    error_count = 0;

    countTime = () => {
        this.timeCounter = setInterval(() => {
            let zero;
            this.second++;
            if (this.second === 59) {
                this.second = 0;
                this.min++;
            }
            if (this.second > 9) {
                zero = '';
            } else if (this.second <= 9) {
                zero = 0;
            }
            //timer.innerText = `Timer: ${min}:${zero}${second}`;
            document.querySelector('.time').innerText = `Timer: ${this.min}:${zero}${this.second}`
        }, 1000);
    };

    verifyNum = (num) => {
        if (this.control_num <= 25) {
            if (num === this.control_num) {
                console.log("clicked:", num, "control num: ", this.control_num);
                if (num === 25) {
                    let zero;
                    if (this.second > 9) {
                        zero = '';
                    } else if (this.second <= 9) {
                        zero = 0;
                    }
                    document.querySelector('.message').innerText = 
                        `Ваше время: ${this.min}:${zero}${this.second}, ${this.error_count} ошибок`;
                    clearInterval(this.timeCounter);
                    this.timer_start = false;
                    this.second = 0;
                    this.min = 0;
                    console.log("Training is over");
                    this.training = false;
                } else {
                    document.querySelector('.message').innerText = `Продолжайте`;
                    this.control_num = this.control_num + 1;
                }

            } else {
                if (this.training) {
                    this.error_count++;
                    document.querySelector('.message').innerText = `Ошибка, нужное число: ${this.control_num}`;
                    console.log("clicked:", num, "control num: ", this.control_num);
                }
            }
        }
    }

    drawTable = () => {
        let splitNumbers = []
        this.numbers.sort(this.compareRandom);
        splitNumbers.push(this.numbers.slice(0, 5));
        splitNumbers.push(this.numbers.slice(5, 10));
        splitNumbers.push(this.numbers.slice(10, 15));
        splitNumbers.push(this.numbers.slice(15, 20));
        splitNumbers.push(this.numbers.slice(20, 25));


        const tableContainer = document.querySelector('.table');
        while (tableContainer.firstChild) {
            tableContainer.removeChild(tableContainer.firstChild);
        }
        const tbl = document.createElement('table');
        tbl.style.width = '100px';
        tbl.style.border = '1px solid black';

        for (let i = 0; i < splitNumbers.length; i++) {
            let tr = tbl.insertRow();
            for (let j = 0; j < splitNumbers[i].length; j++) {

                let td = tr.insertCell();
                td.appendChild(document.createTextNode(splitNumbers[i][j].slice(1)));
                td.style.border = '1px solid black';
                if (splitNumbers[i][j][0] === 'r') {
                    td.style.color = 'red';
                }
                td.addEventListener('click', () => {
                    // console.log(splitNumbers[i][j])
                    this.verifyNum(splitNumbers[i][j])
                })
            }
        }
        tableContainer.appendChild(tbl);
    }
    init = () => {
        clearInterval(this.timeCounter);
        this.timer_start = false;
        this.second = 0;
        this.min = 0;

        if (this.timer_start === false) {
            this.countTime();
            this.timer_start = true;
        }
        this.drawTable();
    }
    render() {
        return (
            <div className='contents'>
                Тренировка различных аспектов внимания
                <div className='message'>
                    <span className='start-message'>Начните поиск цифр от 1 до 25</span>
                    <button className='start-btn' onClick={() => this.init()}>Начать</button>
                </div>
                <div className='table'></div>
                <div className='time'></div>
            </div>
        );
    }
}

export default ShulteRB;