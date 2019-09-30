import React, {Component} from 'react';
import {connect} from 'react-redux';
import {createProject} from '../../../actions/projectActions';
import {submitCount} from '../../../actions/generalHelpers';
import {Redirect} from 'react-router-dom';
import Information from '../Shulte/Information';
import {Rows} from './Rows';
import {Button} from "../../Button";
import './styles.css';

export const lineLength = 23; //23;
const numberOfRows = 10; //10

class Count extends Component {
  state = {
    error: false,
    errorCounter: 0,
    startTraining: false,
    endTraining: false,
    result: {},
    currentRow: 0,
    answer: [],
  };

  setAnswer = (ans) => {
    console.log(ans);
    this.setState(({answer: {...this.state.answer, [this.state.currentRow]: ans}}))
  };

  rowLength = Array(numberOfRows).fill('');

  startNextRow = (i) => {
    this.setState({currentRow: i});
  };

  endTraining = () => {
    this.setState({endTraining: true});
  };

  setNext = () => {
    this.props.submitResult(this.state.answer);
    this.props.history.push('/test/memory-words');
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
          <Button text='Начать' onClick={() =>
            this.setState({startTraining: true})}/>
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
                rowLength={this.rowLength.length - 1}
                key={i}
                row={i}
                currentRow={this.state.currentRow}
                time={30}
                setAnswer={this.setAnswer}
                startNextRow={this.startNextRow}
                endTraining={this.endTraining}
              />
            )
          }

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
    submitResult: (result) => dispatch(submitCount(result))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Count)
