import React, {Component} from 'react'
import {connect} from 'react-redux'
import {createProject} from '../../../actions/projectActions'
import {submitShulteRed} from '../../../actions/generalHelpers'
import {Redirect} from 'react-router-dom'
import Information from '../Shulte/Information'
import Timer from '../Timer'
import './styles.css';

class Count extends Component {
  state = {
    error: false,
    errorCounter: 0,
    startTraining: false,
    endTraining: false,
    result: {}
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  };
  lineLength = 3; //23;
  firstNumber = Array(this.lineLength).fill().map((e, i) => Math.floor(Math.random() * (10 - 1)) + 1);
  secondNumber = Array(this.lineLength).fill().map((e, i) => Math.floor(Math.random() * (10 - 1)) + 1);
  sign = Array(this.lineLength).fill().map((e) => Math.round(Math.random()));

  getResult(first, second, sign) {
    return sign ? first + second : first - second;
  }

  render() {
    const {auth} = this.props;
    if (!auth.uid) return <Redirect to='/signin'/>;
    return (
      <div className='contents'>
        <p>Тренировка различных аспектов внимания</p>
        {!this.state.startTraining &&
        <div className='message'>
          <span className='start-message'>{'Складывайте или вычитайте числа'}</span>
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

          <div>
            {
              this.firstNumber.map((number, i) => (
                <div key={i}>
                  <div>{number}</div>
                  <div> {this.sign[i] ? "+" : "-"} </div>
                  <div>{this.secondNumber[i]}</div>
                  <input onChange={this.handleChange} id={i}/>
                </div>
              ))
              // this.numbers.map((e) =>
              //   <div className={e.slice(-1) === 'r' ? 'red cell-wide' : 'cell-wide'}
              //        key={e} onClick={() => this.cellVerify(e)}>{parseInt(e)}</div>)
            }
            <button>Next Line</button>
          </div>
          {!this.state.endTraining && <Timer/>}
        </React.Fragment>
        }
        {this.state.endTraining &&
        <button className='next' onClick={() =>
          this.props.submitResult({time: this.props.time, errors: this.state.errorCounter})
        }>Submit</button>
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
    submitResult: (result) => dispatch(submitShulteRed(result))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Count)