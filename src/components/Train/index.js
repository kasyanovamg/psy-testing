import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
//import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import Sample from '../Sample';
import Navbar from '../Navbar';

const Train = (props) => {
  const { auth } = props;
  if (!auth.uid) return <Redirect to='/signin' />
  return (
    <div>
      <Navbar />
      Train
            <Sample history={props.history} />
      <Link to={'/summary'} >Summary</Link>
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
)(Train)