import React from 'react'
import { NavLink } from 'react-router-dom'
import './styles.css'

const SignedOutLinks = () => {
    return (
        <div>
            <ul className="nav-right">
                <li><NavLink to='/signup'>Регистрация</NavLink></li>
                <li><NavLink to='/signin'>Вход</NavLink></li>
            </ul>
        </div>
    )
}

export default SignedOutLinks