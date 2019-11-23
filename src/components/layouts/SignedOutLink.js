import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedOutLinks = () => {
    return (
        <ul className="right">
            <li><NavLink exact to='/register' activeClassName="activeLink">Register</NavLink></li>
            <li><NavLink exact to='/login' activeClassName="activeLink">Login</NavLink></li>
        </ul>
    )
}

export default SignedOutLinks;