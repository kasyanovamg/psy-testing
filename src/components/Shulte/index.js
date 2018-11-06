import React, { Component } from 'react';
import Instructions from '../Instructions';
import Timer from '../Timer';
import Table from './Table';
import Information from '../Information';
import './styles.css';

class Shulte extends Component {
    componentWillUnmount() {
        this.props.startTraining(false)
    }
    render() {
        return (
            <div className='contents'>
                <p>Тренировка различных аспектов внимания</p>
                <Instructions message={'Начните поиск цифр от 1 до 25'} startTraining={this.props.startTraining} />
                {this.props.start &&
                    <React.Fragment>
                        <Information
                            error={this.props.shulteError}
                            end={this.props.shulteEnd}
                            time={this.props.time}
                            errors={this.props.error} 
                            errorMessage={'Неверное число!'}
                            instructionNote={'Найдите числа!'}
                            />
                        <Table error={this.props.getShulteError} end={this.props.checkShulteEnd} errorCounter={this.props.shulteErrorCounter} />
                        {!this.props.shulteEnd && <Timer getTime={this.props.checkTime} />}
                    </React.Fragment>
                }

            </div>
        );
    }
}

export default Shulte;