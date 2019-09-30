import React, {Component} from 'react';
import {createProject} from "../../actions/projectActions";
import {connect} from "react-redux";
import {Button} from "../Button";
import {Redirect} from "react-router-dom";

class CurrentSummary extends Component {
  state = {
    showSummary: false,
  };
  showResults = () => {
    this.props.createProject(this.props.project);
    this.setState({showSummary: true});
  };
  render() {
    const {auth, project} = this.props;
    if (!auth.uid) return <Redirect to='/signin'/>;
    return <div>
      <Button onClick={this.showResults} text='Посмотреть результаты'/>
      {this.state.showSummary &&
      <div>
        Ваши результаты:

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