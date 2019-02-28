import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createProject } from '../../../actions/projectActions'
import { Redirect } from 'react-router-dom'
import Information from './Information'
import Timer from '../Timer'
import './styles.css';

class Shulte extends Component {
  state = {
    error: false,
    errorCounter: 0,
    startTraining: false,
    endTraining: false
  }

  tableLength = 25;
  numbers = Array(this.tableLength).fill().map((e, i) => i + 1).sort(() => Math.random() - 0.5)
  userNumbers = [0];
  cellVerify = (cell) => {
    this.setState({ error: false })
    if (this.userNumbers.slice(-1)[0] + 1 === cell) {
      this.userNumbers.push(cell);
      if (this.userNumbers.slice(-1)[0] === this.tableLength) {
        this.setState({ endTraining: true })
      }
    }
    else {
      this.setState({ error: true })
      if (this.userNumbers.length <= this.tableLength && cell !== 25) {
        let error = this.state.errorCounter + 1;
        this.setState({ errorCounter: error })
      }
    }
  }
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to='/signin' />
    return (
      <div className='contents'>
        <p>Тренировка различных аспектов внимания</p>
        <div className='message'>
            <span className='start-message'>{'Начните поиск цифр от 1 до 25'}</span>
            <button className='start-btn' onClick={() => this.setState({ startTraining: true })}>Начать</button>
        </div>
        {this.state.startTraining &&
          <React.Fragment>
            <Information
              error={this.state.error}
              end={this.state.endTraining}
              time={this.props.time}
              errors={this.props.error}
              errorMessage={'Неверное число!'}
              instructionNote={'Найдите числа!'}
            />

            <div className='table' >
              {
                this.numbers.map((e) =>
                  <div key={e} onClick={() => this.cellVerify(e)} className='cell'>{e}</div>)
              }
            </div>
            {!this.state.endTraining && <Timer getTime={this.props.checkTime} />}
          </React.Fragment>
        }

      </div>


    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createProject: (project) => dispatch(createProject(project))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Shulte)