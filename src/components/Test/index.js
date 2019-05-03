import React from 'react'
import { connect } from 'react-redux'
//import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Link, Redirect } from 'react-router-dom';
import './styles.css'

const Test = (props) => {
  const { auth } = props;
  if (!auth.uid) return <Redirect to='/signin' />
  return (
    <div className="container">
      {/* <Link to='/test/sample'>Sample</Link>  */}
      <div className="test-home">      
        <Link to='/test/shulte'>Start Shulte Test</Link>
      </div>
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