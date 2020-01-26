import React, {Component} from 'react'
import {connect} from 'react-redux'
import {createProject} from '../../../actions/projectActions'
import {submitResult, submitShulteRed} from '../../../actions/generalHelpers'
import {Redirect} from 'react-router-dom'
import Information from '../Shulte/Information'
import Timer from '../Timer'
import './styles.css';
import {Button} from "../../Button";

class ShulteRed extends Component {
  state = {
    error: false,
    errorCounter: 0,
    startTraining: false,
    endTraining: false,
    countBackwards: false,
  };

  redLength = 24; //24
  blackLength = 25; //25
  red = Array(this.redLength).fill().map((e, i) => i + 1 + 'r');
  black = Array(this.blackLength).fill().map((e, i) => i + 1 + 'b');
  numbers = this.red.concat(this.black).sort(() => Math.random() - 0.5);
  userRed = [`${this.redLength + 1}r`];
  userBlack = ['0b'];
  cellVerify = (cell) => {
    this.setState({error: false});
    if (this.state.countBackwards) {
      if (parseInt(this.userRed.slice(-1)[0]) - 1 + "r" === cell) {
        this.userRed.push(cell);
        this.setState({countBackwards: false});
      } else {
        this.setState({error: true});
        if (this.userRed.length <= this.redLength && cell !== 24) {
          let error = this.state.errorCounter + 1;
          this.setState({errorCounter: error})
        }
      }
    } else if (!this.state.countBackwards) {
      if (parseInt(this.userBlack.slice(-1)[0]) + 1 + "b" === cell) {
        this.userBlack.push(cell);
        this.setState({countBackwards: true});
        if (parseInt(this.userBlack.slice(-1)[0]) === this.blackLength) {
          this.setState({endTraining: true})
        }
      } else {
        this.setState({error: true});
        if (this.userBlack.length <= this.blackLength && cell !== 25) {
          let error = this.state.errorCounter + 1;
          this.setState({errorCounter: error})
        }
      }
    }
  };

  getFinalScore = () => {
    return this.props.time * 0.1 + this.state.errorCounter;
  };

  setNext = () => {
    const finalScore = this.getFinalScore();
    this.props.submitResult({time: this.props.time, errors: this.state.errorCounter});
    this.props.submitFinal ({finalScore, name: 'shulteRed'});
    this.props.history.push('/test/perception');
  };

  abortTest = () => {
    const currentErrors = this.state.errorCounter + (this.redLength + this.blackLength - this.userRed.length - this.userBlack.length);
    this.setState({errorCounter: currentErrors});
    this.setState({endTraining: true});
  };

  render() {
    const {auth} = this.props;
    if (!auth.uid) return <Redirect to='/signin'/>;
    return (
      <div className='contents'>
        <p>Тренировка различных аспектов внимания</p>
        <p>
          Кликайте на красные и черные цифры цифры по-переменно: черные - в порядке возрастания, красные в порядке убывания.
        </p>
        {!this.state.startTraining &&
        <div className='message'>
          <span className='start-message'>{'Начните поиск цифр: 1 черный - 24 красный; 2 черный - 23 красный... '}</span>
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
            instructionNote={'Найдите числа: 1 черный - 24 красный; 2 черный - 23 красный...'}
          />

          <div className='table-wide'>
            {
              this.numbers.map((e) =>
                <div className={e.slice(-1) === 'r' ? 'red cell-wide' : 'cell-wide'}
                     key={e} onClick={() => this.cellVerify(e)}>{parseInt(e)}</div>)
            }
          </div>
          {!this.state.endTraining && <> <Timer/> <Button text='Завершить тестирование' onClick={this.abortTest} />
            <div>Все не найденные числа защитаются как ошибки!</div> </>}
        </React.Fragment>
        }
        {this.state.endTraining &&
        <Button nameOfClass='next' onClick={this.setNext} text='Далее'/>
        }
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
    submitResult: (result) => dispatch(submitShulteRed(result)),
    submitFinal: (result) => dispatch(submitResult(result)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ShulteRed)