import React, {Component} from 'react';
import Timer from '../Timer';
import Information from '../Shulte/Information';
import {createProject} from "../../../actions/projectActions";
import {submitPerseption, submitResult} from "../../../actions/generalHelpers";
import {connect} from "react-redux";
import './styles.css';
import {Button} from "../../Button";
import {Redirect} from "react-router-dom";

class Perception extends Component {
  state = {
    error: false,
    errorCounter: 0,
    startTraining: false,
    endTraining: false
  };
  letter = 'н';
  searchedLetter = 'п';
  gridLength = 252;  //252
  letters = Array(this.gridLength).fill(this.letter);
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
  abortTest = () => {
    this.setState({errorCounter: this.state.errorCounter + (this.newLetters.length - this.guessedCells.length)});
    this.setState({endTraining: true});
  };

  getFinalScore = () => {
    return this.props.time * 10 + this.state.errorCounter;
  };

  setNext = () => {
    const finalScore = this.getFinalScore();
    this.props.submitResult({time: this.props.time, errors: this.state.errorCounter});
    this.props.submitFinal ({finalScore, name: 'perception'});
    this.props.history.push('/test/count');
  };

  render() {
    const {auth} = this.props;
    if (!auth.uid) return <Redirect to='/signin'/>;
    return (
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
            {!this.state.endTraining && <> <Timer getTime={this.props.time}/> <Button text='Завершить тестирование' onClick={this.abortTest} /> </>}

          </React.Fragment>
          }
          {this.state.endTraining && <Button nameOfClass='next' onClick={this.setNext} text='Далее'/>}
        </div>
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
    submitResult: (result) => dispatch(submitPerseption(result)),
    submitFinal: (result) => dispatch(submitResult(result)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Perception)