import React, { Component } from 'react';
import Timer from '../Timer';
import Information from '../Shulte/Information';
import Grid from './Grid'

class Perception extends Component {
    state = {
        startTraining: false,
    };
    letter = 'н';
    searchedLetter = 'п';
    render() {
        return (
            <div className='contents'>
                <p>Корректурная проба</p>{!this.state.startTraining &&
                <div className='message'>
                    <span className='start-message'>{`Найдите все буквы "${this.searchedLetter}"`}</span>
                    <button className='start-btn' onClick={() => this.setState({ startTraining: true })}>Начать</button>
                </div>
                }
                {this.props.start &&
                    <React.Fragment>
                        <Information error={this.props.errorCheck} end={this.props.perceptionEnd} time={this.props.time} 
                        errors={this.props.perseptionError} 
                        errorMessage={'Неверная буква!'}
                        instructionNote={`Найдите все буквы "${this.searchedLetter}"`}
                        />
                        <Grid
                            letter={this.letter}
                            searchedLetter={this.searchedLetter}
                            errorCounter={this.props.perceptionErrorCounter}
                            error={this.props.getPerceptionError}
                            end={this.props.checkPerceptionEnd}
                        />
                        {!this.props.perceptionEnd && <Timer getTime={this.props.checkTime} />}
                    </React.Fragment>
                }

            </div>
        );
    }
}

export default Perception;