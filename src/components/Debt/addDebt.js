import React, { Component } from 'react'
import { connect } from 'react-redux'
import {createDebt} from '../../store/actions/debt/debtActions'

class AddDebt extends Component {
    state = {
        name: '',
        amount: 0,
        interest: 0,
        basePayment: 0
    };

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        //console.log(this.state);
        this.props.createDebt(this.state);
    }

    render() {
        return (
            <div className="container">
                <form className='white' onSubmit={this.handleSubmit}>
                    <h5 className='grey-text text-darken-3'>Add Debt</h5>
                    <div className='input-field'>
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" onChange={this.handleChange} />
                    </div>
                    <div className='input-field'>
                        <label htmlFor="amount">Amount</label>
                        <input type="number" id="amount" onChange={this.handleChange} step="any" min="0" />
                    </div>
                    <div className='input-field'>
                        <label htmlFor="interest">Interest (%)</label>
                        <input type="number" id="interest" onChange={this.handleChange} step="any" min="0" />
                    </div>
                    <div className='input-field'>
                        <label htmlFor="basePayment">Base Payment</label>
                        <input type="number" id="basePayment" onChange={this.handleChange} step="any" min="0" />
                    </div>
                    <div className='input-field'>
                        <button className="btn pink lighten-1 z-depth-2">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createDebt: (debt) => createDebt(debt, dispatch)
    }
}

export default connect(null, mapDispatchToProps)(AddDebt)