import React, {Component} from 'react';
import Timer from '../Timer';
import Information from '../Shulte/Information';
import {createProject} from "../../../actions/projectActions";
import {submitPerseption} from "../../../actions/generalHelpers";
import {connect} from "react-redux";
import './styles.css';

class Perception extends Component {
  state = {
    error: false,
    errorCounter: 0,
    startTraining: false,
    endTraining: false
  };
  letter = 'н';
  searchedLetter = 'п';
  letters = Array(252).fill(this.letter);
  // letters = Array(4).fill(this.props.letter);   // short array for testing
  newLetters = Array(4).fill(this.searchedLetter);
  longLetters = this.letters.concat(this.newLetters).sort(() => Math.random() - 0.5);

  guessedCells = [];
  cellVerify = (cell, index) => {
    this.setState({error: false});
    if (cell === this.searchedLetter && !this.guessedCells.includes(index) && this.guessedCells.length <= this.newLetters.length) {
      this.guessedCells.push(index);
      if (this.newLetters.length === this.guessedCells.length) {
        this.setState({endTraining: true});
      }
    } else {
      this.setState({error: true, errorCounter: this.state.errorCounter + 1});
    }

  };

  render() {
    //TO DO: move grid over here so it can use same state, like shulte table
    return (
      <>
        <div className='contents'>
          <p>Корректурная проба</p>
          {!this.state.startTraining &&
          <div className='message'>
            <span className='start-message'>{`Найдите все буквы "${this.searchedLetter}"`}</span>
            <button className='start-btn' onClick={() => this.setState({startTraining: true})}>Начать</button>
          </div>
          }
          {this.state.startTraining &&
          <React.Fragment>
            <Information error={this.state.error} end={this.state.endTraining}
                         errors={this.state.errorCounter}
                         errorMessage={'Неверная буква!'}
                         instructionNote={`Найдите все буквы "${this.searchedLetter}"`}
            />
            <div className='grid'>
              {
                this.longLetters.map((e, i) =>
                  <div
                    key={i}
                    onClick={(e) => this.cellVerify(e.target.innerText, i)}
                    className='letter'>{e}
                  </div>)
              }
            </div>
            {!this.state.endTraining && <Timer getTime={this.props.time}/>}
          </React.Fragment>
          }
        </div>
        {this.state.endTraining &&
        <button onClick={() => this.props.submitResult(
          {time: this.props.time, errors: this.state.errorCounter}
        )}>Submit</button>}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    time: state.current.setTime,
    project: state.result
  }
};

const mapDispatchToProps = dispatch => {
  return {
    createProject: (project) => dispatch(createProject(project)),
    submitResult: (result) => dispatch(submitPerseption(result))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Perception)