import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'
import {setGroup, setAttempt} from "../../actions/generalHelpers";
import {compose} from "redux";
import {connect} from "react-redux";
import {firestoreConnect} from "react-redux-firebase";
import get from "lodash-es/get";

const Home = ({setGroup, group, setAttempt, attempt}) => {
  return (
        <div className="container home-container">
            <div className="home-item" onClick={() => {setGroup(group); setAttempt(attempt + 1)}}><Link to='/test/shulte'>Начать</Link></div>
        </div>
    )
};
const getAllProjects = (state) => get(state, 'firestore.ordered.projects', []);

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    group: state.firebase.profile.group,
    attempt: getAllProjects(state).length,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    setGroup: (group) => dispatch(setGroup(group)),
    setAttempt: (attempt) => dispatch(setAttempt(attempt)),
  }
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect(props => {
      return [
        { collection: 'projects', where: [['authorId', '==', props.auth.uid]] }
      ]
    })
)(Home)