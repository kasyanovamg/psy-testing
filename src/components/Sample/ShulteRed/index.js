import React, {Component} from 'react'
import {connect} from 'react-redux'
import {createProject} from '../../../actions/projectActions'
import {submitShulteRed} from '../../../actions/generalHelpers'
import {Redirect} from 'react-router-dom'
import Information from '../Shulte/Information'
import Timer from '../Timer'
import './styles.css';

class ShulteRed extends Component {
  state = {
    error: false,
    errorCounter: 0,
    startTraining: false,
    endTraining: false,
    countBackwards: false,
  };

  redLength = 24;
  blackLength = 25;
  red = Array(this.redLength).fill().map((e, i) => i + 1 + 'r');
  black = Array(this.blackLength).fill().map((e, i) => i + 1 + 'b');
  numbers = this.red.concat(this.black).sort(() => Math.random() - 0.5);
  userRed = [`${this.redLength + 1}r`];
  userBlack = ['0b'];
  cellVerify = (cell) => {
    console.log(cell, this.userRed, this.userBlack);
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

  render() {
    const {auth} = this.props;
    if (!auth.uid) return <Redirect to='/signin'/>;
    return (
      <div className='contents'>
        <p>Тренировка различных аспектов внимания</p>
        {!this.state.startTraining &&
        <div className='message'>
          <span className='start-message'>{'Начните поиск цифр'}</span>
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

          <div className='table-wide'>
            {
              this.numbers.map((e) =>
                <div className={e.slice(-1) === 'r' ? 'red cell-wide' : 'cell-wide'}
                     key={e} onClick={() => this.cellVerify(e)}>{parseInt(e)}</div>)
            }
          </div>
          {!this.state.endTraining && <Timer/>}
        </React.Fragment>
        }
        {this.state.endTraining &&
        //two buttons did better job, one button is next and the final button is submit
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

export default connect(mapStateToProps, mapDispatchToProps)(ShulteRed)