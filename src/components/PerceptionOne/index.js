import React, { Component } from 'react';
import Instructions from '../Instructions';
import Timer from '../Timer';
import Information from '../Information';
import Grid from './Grid'

class PerceptionOne extends Component {
    letter = 'н';
    searchedLetter = 'и';
    render() {
        console.log(this.props)
        return (
            <div className='contents'>
                <p>Корректурная проба</p>
                 <Instructions message={`Найдите все буквы "${this.searchedLetter}"`} startTraining={this.props.startTraining} />
               {this.props.start &&
                    <React.Fragment>
                        <Information error={this.props.shulteError} end={this.props.shulteEnd} time={this.props.time} />
                        <Grid 
                        letter={this.letter} 
                        searchedLetter={this.searchedLetter} 
                        errorCounter={this.props.perceptionErrorCounter}
                        error={this.props.perseptionError} 
                        end={this.props.perceptionEnd}
                        />
                        {!this.props.perceptionEnd && <Timer getTime={this.props.checkTime} />}
                    </React.Fragment>
                } 

            </div>
        );
    }
}

export default PerceptionOne;