import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedInLinks = () => {
    return (
        <ul className="right">
            <li><NavLink exact to='/addDebt' activeClassName="activeLink">New Debt</NavLink></li>
            <li><NavLink exact to='/' activeClassName="activeLink">Logout</NavLink></li>
            <li><NavLink exact to='/' className='btn btn-floating pink lighten-1'>TR</NavLink></li>
        </ul>
    )
}

export default SignedInLinks;