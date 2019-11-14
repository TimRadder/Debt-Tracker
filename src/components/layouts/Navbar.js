import React from 'react'
import { Link } from 'react-router-dom'

import SignedInLinks from './SignedInLink'
import SignedOutLinks from './SignedOutLink'

const Navbar = () => {
    return (
        <nav className="nav nav-wrapper grey darken-3">
            <div className="container">
                <Link to='/' className="brand-logo">Debt Tracker</Link>
                <SignedInLinks></SignedInLinks>
                <SignedOutLinks></SignedOutLinks>
            </div>   
        </nav>
    )
}

export default Navbar;