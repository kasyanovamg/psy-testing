import React, {Component} from 'react';
import {connect} from 'react-redux';
import flattenDeep from 'lodash-es/flattenDeep';
import {createProject} from '../../../actions/projectActions';
import {submitCount, submitResult} from '../../../actions/generalHelpers';
import {Redirect} from 'react-router-dom';
import Information from '../Shulte/Information';
import {Rows} from './Rows';
import {Button} from "../../Button";
import './styles.css';

export const lineLength = 20; //23;
const numberOfRows = 8; //10 - always even number

class Count extends Component {
  state = {
    error: false,
    errorCounter: 0,
    startTraining: false,
    endTraining: false,
    result: {},
    currentRow: 0,
    answer: {},
    arrayAnswer: [],
    finalScore: 0,
  };

  setAnswer = (ans) => {
    this.setState(({answer: {...this.state.answer, [this.state.currentRow]: ans}}));
    this.setState(({arrayAnswer: [...this.state.arrayAnswer, ans]}))
  };

  rowLength = Array(numberOfRows).fill('');

  startNextRow = (i) => {
    this.setState({currentRow: i});
  };

  endTraining = () => {
    this.setState({endTraining: true});
  };


  setNext = () => {
    const firstArray = flattenDeep(this.state.arrayAnswer.slice(0, numberOfRows/2));
    const secondArray = flattenDeep(this.state.arrayAnswer.slice(numberOfRows/2, numberOfRows));
    console.log(firstArray, secondArray);
    const firstResult = firstArray.reduce((a, b = {}) => { console.log(a, b);   return a + b.res}, 0);
    const secondResult = secondArray.reduce((a, b = {}) => a + b.res, 0);
    // Если значение коэффициента работоспособности приближается к 1,
    // то это означает, что утомления практически не происходит.
    // Если коэффициент больше 1, то это свидетельствует о медленной врабатываемости испытуемого.
    // Коэффициент работоспособности, стремящийся к нулю, связан с истощаемостью внимания и снижением работоспособности.
    const finalResult = firstResult > 0 ? secondResult/firstResult : 0;
    this.props.submitResult(this.state.answer);
    this.props.submitFinal ({finalScore: finalResult, name: 'count'});
    this.props.history.push('/test/memory-words');
  };

  render() {
    const {auth} = this.props;
    if (!auth.uid) return <Redirect to='/signin'/>;
    return (
      <div className='contents'>
        <p>Тренировка различных аспектов внимания</p>
        <p className='container'>Вам будет дано {numberOfRows} радов чилел. Нужно складывать или вычитать числа и записывать в поле ввода
          (для отрицательных чисел не обязательно ставить знак минуса). На подсчет каждого ряда дается 30 секунд.
          По истечении этого времени ряд будет блокироваться.</p>
        {!this.state.startTraining &&
        <div className='message'>
          <span className='start-message'>{'Складывайте или вычитайте числа. Запишите модуль числа.'}</span>
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
            instructionNote={'Складывайте или вычитайче числа. Запишите модуль числа.'}
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
    submitResult: (result) => dispatch(submitCount(result)),
    submitFinal: (result) => dispatch(submitResult(result)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Count)
