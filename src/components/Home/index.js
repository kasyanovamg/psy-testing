import React from 'react'
import {Link, Redirect} from 'react-router-dom'
import './styles.css'
import {setGroup, setAttempt} from "../../actions/generalHelpers";
import {compose} from "redux";
import {connect} from "react-redux";
import {firestoreConnect} from "react-redux-firebase";
import get from "lodash-es/get";

const Home = ({setGroup, group, setAttempt, attempt, auth}) => {
  if (!auth.uid) {
    return <Redirect to='/signin'/>;
  }
  return (
        <div className="container home-container">
          <h3>
            Добро пожаловать на сайт для исследования психологических харастеристик, наиболее важных для программистов!
          </h3>
          <br/>
          <div>
            Вам будет предложено 5 методик, направленных на исследование уровня концентрации, объема, распределения и переключения
            внимания, памяти, мышления. Перед началом каждой методики будут даны инструкции и запущен таймер.
          </div>
          <br/>
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
      return props.auth.uid ? [
        { collection: 'projects', where: [['authorId', '==', props.auth.uid]] }
      ] : []
    })
)(Home)