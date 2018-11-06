import React, { Component } from 'react';
import Instructions from '../Instructions';
import Timer from '../Timer';
import Information from '../Information';
import Grid from './Grid'

class PerceptionOne extends Component {
    render() {
        return (
            <div className='contents'>
                <p>Корректурная проба</p>
                 <Instructions message={'Найдите букву...'} startTraining={this.props.startTraining} />
               {this.props.start &&
                    <React.Fragment>
                        <Information error={this.props.shulteError} end={this.props.shulteEnd} time={this.props.time} />
                        <Grid />
                        {!this.props.shulteEnd && <Timer getTime={this.props.checkTime} />}
                    </React.Fragment>
                } 

            </div>
        );
    }
}

export default PerceptionOne;