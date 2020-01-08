import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'
import {setGroup} from "../../actions/generalHelpers";
import {compose} from "redux";
import {connect} from "react-redux";

const Home = ({setGroup, group}) => {
console.log(1111111111, group)
  return (
        <div className="container home-container">
            <div className="home-item" onClick={() => setGroup(group)}><Link to='/test/shulte'>Начать</Link></div>
        </div>
    )
};




const mapStateToProps = (state) => {
  return {
    group: state.firebase.profile.group,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    setGroup: (group) => dispatch(setGroup(group)),
  }
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(Home)