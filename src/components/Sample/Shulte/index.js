import React, {Component} from 'react'
import {connect} from 'react-redux'
import {createProject} from '../../../actions/projectActions'
import {submitShulte, submitResult} from '../../../actions/generalHelpers'
import {Redirect} from 'react-router-dom'
import Information from './Information'
import Timer from '../Timer'
import {Button} from "../../Button";
import './styles.css';

class Shulte extends Component {
  state = {
    error: false,
    errorCounter: 0,
    startTraining: false,
    endTraining: false,
  };

  tableLength = 25; //25
  numbers = Array(this.tableLength).fill().map((e, i) => i + 1).sort(() => Math.random() - 0.5);
  userNumbers = [0];
  cellVerify = (cell) => {
    this.setState({error: false});
    if (this.userNumbers.slice(-1)[0] + 1 === cell) {
      this.userNumbers.push(cell);
      if (this.userNumbers.slice(-1)[0] === this.tableLength) {
        this.setState({endTraining: true})
      }
    } else {
      this.setState({error: true});
      if (this.userNumbers.length <= this.tableLength && cell !== 25) {
        let error = this.state.errorCounter + 1;
        this.setState({errorCounter: error})
      }
    }
  };

  getFinalScore = () => {
    return this.props.time * 0.1 + this.state.errorCounter;
  };

  setNext = () => {
    const finalScore = this.getFinalScore();
    this.props.submitResult({time: this.props.time, errors: this.state.errorCounter});
    this.props.submitFinal ({finalScore, name: 'shulte'});
    this.props.history.push('/test/shulte-red');
  };

  abortTest = () => {
    const currentErrors = this.state.errorCounter + (this.tableLength - this.userNumbers.length);
    this.setState({errorCounter: currentErrors});
    this.setState({endTraining: true});
  };

  render() {
    const {auth} = this.props;
    if (!auth.uid) return <Redirect to='/signin'/>;
    return (
      <div className='contents'>
        <p>Тренировка различных аспектов внимания</p>
        {!this.state.startTraining &&
        <div className='message'>
          <span className='start-message'>{'Начните поиск цифр от 1 до 25'}</span>
          <button className='start-btn' onClick={() =>
            this.setState({startTraining: true})}>
            Начать
          </button>
        </div>
        }
        {this.state.startTraining &&
        <React.Fragment>
          <Information
            error={this.state.error}
            end={this.state.endTraining}
            errors={this.state.errorCounter}
            errorMessage={'Неверное число!'}
            instructionNote={'Найдите числа!'}
          />

          <div className='table'>
            {
              this.numbers.map((e) =>
                <div key={e} onClick={() => this.cellVerify(e)} className='cell'>{e}</div>)
            }
          </div>
          {!this.state.endTraining && <> <Timer/> <Button text='Завершить тестирование' onClick={this.abortTest} />
          <div>Все не найденные числа защитаются как ошибки!</div> </>}
        </React.Fragment>
        }
        {this.state.endTraining && <Button nameOfClass='next' onClick={this.setNext} text='Далее'/>}
      </div>
    )
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
    submitResult: (result) => dispatch(submitShulte(result)),
    submitFinal: (result) => dispatch(submitResult(result)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Shulte)