import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../actions/authActions'

const SignedInLinks = (props) => {
    return (
        <div>
            <ul className="right">
                <li><div onClick={props.signOut}>Log Out</div></li>
                <li><NavLink to='/profile' className="btn btn-floating pink lighten-1">Name: {props.profile.firstName}</NavLink></li>
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