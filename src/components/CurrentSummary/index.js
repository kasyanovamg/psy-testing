import React, {Component} from 'react';
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import get from 'lodash-es/get';
import {createProject} from "../../actions/projectActions";
import {Button} from "../Button";
import {SummaryBlock} from '../SummaryBlock';
import './styles.css';

class CurrentSummary extends Component {
  state = {
    showSummary: false,
  };
  showResults = () => {
    // const project = {
    //   generalResult: {
    //     count: 0.72235,
    //     shulte: 2.005244,
    //     shulteRed: 10.8572342,
    //     perception: 1.8054786,
    //     memoryWords: 10,
    //   },
    //   attempt: 5,
    //   group: "ctrl",
    // }
    // this.props.createProject(project);
    this.props.createProject(this.props.project);
    this.setState({showSummary: true});
  };

  render() {
    const {auth, project} = this.props;
    const {count, memoryWords, perception, shulte, shulteRed} = get(project, 'generalResult', {});
    if (!auth.uid) return <Redirect to='/signin'/>;
    return <div className='summary-container'>
      <div className='summary-button'>
        {!this.state.showSummary && <Button onClick={this.showResults} text='Посмотреть результаты'/>}
      </div>
      {this.state.showSummary &&
      <div>
        <h3>Ваши результаты:</h3>
        <br/>
        <SummaryBlock
        count={count}
        memoryWords={memoryWords}
        perception={perception}
        shulte={shulte}
        shulteRed={shulteRed}
      />
      <br/>
      <br/>
      <p>График по всем результатам можно посмотреть в личном кабинете в профиле.</p>
      </div>
      }
    </div>
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    project: state.result
  }
};

const mapDispatchToProps = dispatch => {
  return {
    createProject: (project) => dispatch(createProject(project)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrentSummary)