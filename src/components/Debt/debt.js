import React from 'react'
import { Link } from 'react-router-dom'

const Debt = ({debt}) => {
    const toURL = "/debt/" + debt.id;
    return(
        <div className='col s12 m4' >
            <div className="card medium grey lighten-5 z-depth-3">
                <div className="card-content grey-text text-darken-3">
                    <span className="card-title">{debt.name}</span>
                    <p>Chart would probably go here</p>
                </div>
                <div className="card-action grey lighten-3">
                    <Link to={toURL} className="blue-text accent-4">View Debt</Link>
                    <Link to="/" className="blue-text accent-4">Add Payment</Link>
                </div>
            </div>
        </div>
    )
}

export default Debt;