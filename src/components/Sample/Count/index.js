import React, {Component} from 'react';
import {connect} from 'react-redux';
import {createProject} from '../../../actions/projectActions';
import {submitShulteRed} from '../../../actions/generalHelpers';
import {Redirect} from 'react-router-dom';
import Information from '../Shulte/Information';
import TimerReverse from '../TimerReverse';
import { Numbers } from "./Numbers";
import './styles.css';

const lineLength = 3; //23;

class Count extends Component {
  state = {
    error: false,
    errorCounter: 0,
    startTraining: false,
    endTraining: false,
    result: {},
    currentRow: 0,
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  };


  getResult(first, second, sign) {
    return sign ? first + second : first - second;
  }

  rowLength = Array(5).fill('');

  startNextRow = (i) => {
    this.setState({currentRow: i});
  };

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

          {
            this.rowLength.map((item, i) =>
              (<div key={i} className='number-container'>
                {
                  Array(lineLength).fill().map((number, j) => (
                    <Numbers
                      key={j}
                      elIndex={j}
                      onChange={this.handleChange}
                      disabled={i !== this.state.currentRow}
                      lineLength={lineLength}
                    />
                  ))
                }
                <button onClick={() => this.startNextRow(i + 1)}>Next Line</button>

                {i === this.state.currentRow &&
                <TimerReverse maxTime={5} passedFunction={() => this.startNextRow(i + 1)}/>
                }

              </div>)
            )
          }

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
