import React from 'react'
import {connect} from 'react-redux'
//import { firestoreConnect } from 'react-redux-firebase'
import {compose} from 'redux'
import {Link, Redirect} from 'react-router-dom';
import './styles.css'

const Test = (props) => {
  const {auth} = props;
  if (!auth.uid) return <Redirect to='/signin'/>;
  return (
    <div className="container">
      {/* <Link to='/test/sample'>Sample</Link>  */}
      <div className="test-home">
        <Link to='/test/shulte'>Начать тест Шульте</Link>
        <br/>
        <Link to='/test/shulte-red'>Начать тест Шульте в модификации Горбова</Link>
        <br/>
        <Link to='/test/perception'>Начать методику корректурные пробы</Link>
        <br/>
        <Link to='/test/count'>Начать методику счет по Крепелину</Link>
        <br/>
        <Link to='/test/memory-words'>Начать методику "Запоминание слов"</Link>
      </div>
    </div>
  )
};

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    auth: state.firebase.auth
  }
};

export default compose(
  connect(mapStateToProps)
)(Test)