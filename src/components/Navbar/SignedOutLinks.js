import React from 'react'
import { NavLink } from 'react-router-dom'
import './styles.css'

const SignedOutLinks = (props) => {
    return (
        <div>
            <ul className="nav-right">
                <li><NavLink to='/signup' className={props.className}>Регистрация</NavLink></li>
                <li><NavLink to='/signin' className={props.className}>Вход</NavLink></li>
            </ul>
        </div>
    )
}

export default SignedOutLinks