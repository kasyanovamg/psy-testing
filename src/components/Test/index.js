import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import Sample from '../Sample';
import Summary from '../Summary';

const Test = (props) => {
    const { projects, auth } = props;
    console.log(projects)
    if (!auth.uid) return <Redirect to='/signin' /> 
    return (
        <div>
            test
            <Sample history={props.history}/>
            {/* <Summary projects={projects} /> */}
        </div>
    )
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'projects' }
  ])
  )(Test)