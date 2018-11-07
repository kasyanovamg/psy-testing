import React, { Component } from 'react';
import Instructions from '../Instructions';
import Timer from '../Timer';
import Information from '../Information';
import Grid from './Grid'

class PerceptionOne extends Component {
    letter = this.props.letter;
    searchedLetter = this.props.searchedLetter;
    render() {
        return (
            <div className='contents'>
                <p>Корректурная проба</p>
                <Instructions message={`Найдите все буквы "${this.searchedLetter}"`} startTraining={this.props.startTraining} />
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

export default PerceptionOne;