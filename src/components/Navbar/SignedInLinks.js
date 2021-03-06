import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../actions/authActions'
import './styles.css'

const SignedInLinks = (props) => {
    return (
        <div>
            <ul className={props.className}>
                <li><div onClick={props.signOut} className={props.className} >Выход</div></li>
                <li><NavLink to='/profile' className={props.className}>Профиль: {props.profile.firstName}</NavLink></li>
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