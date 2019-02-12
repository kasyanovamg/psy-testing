import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

const Test = (props) => {
    const { projects, auth } = props;
    if (!auth.uid) return <Redirect to='/signin' /> 
    return (
        <div>
            test
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
    connect(mapStateToProps)
    //,
    // firestoreConnect([
    //   { collection: 'projects' }
    // ])
  )(Test)