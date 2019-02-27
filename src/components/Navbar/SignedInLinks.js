import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../actions/authActions'
import './styles.css'

const SignedInLinks = (props) => {
    return (
        <div>
            <ul className="nav-right">
                <li><div onClick={props.signOut} className="logout" >Log Out</div></li>
                <li><NavLink to='/profile' className="">Profile: {props.profile.firstName}</NavLink></li>
            </ul>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks) // null replaced mapstatetoprops