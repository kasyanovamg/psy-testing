import React from 'react'
import { connect } from 'react-redux'
//import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Link, Redirect } from 'react-router-dom'
import Navbar from '../Navbar';

const Test = (props) => {
  const { auth } = props;
  if (!auth.uid) return <Redirect to='/signin' />
  return (
    <div>
      <Navbar />
      test
      <Link to='/test/sample'>Sample</Link>
      <Link to='/test/shulte'>Shulte</Link>
    </div>
  )
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps)
)(Test)