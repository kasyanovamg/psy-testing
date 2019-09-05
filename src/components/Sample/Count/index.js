import React, {Component} from 'react';
import {connect} from 'react-redux';
import {createProject} from '../../../actions/projectActions';
import {submitShulteRed} from '../../../actions/generalHelpers';
import {Redirect} from 'react-router-dom';
import Information from '../Shulte/Information';
import {Rows} from './Rows';
import './styles.css';

export const lineLength = 3; //23;

class Count extends Component {
  state = {
    error: false,
    errorCounter: 0,
    startTraining: false,
    endTraining: false,
    result: {},
    currentRow: 0,
    answer: {},
  };

  setAnswer = (ans) => {
    console.log(ans)
    // this.setState(state =>( {answer: {...state.answer, ans}}))
  };

  rowLength = Array(2).fill('');

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
              <Rows
                key={i}
                row={i}
                currentRow={this.state.currentRow}
                time={55}
                setAnswer={this.setAnswer}
                startNextRow={this.startNextRow}
              />
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
