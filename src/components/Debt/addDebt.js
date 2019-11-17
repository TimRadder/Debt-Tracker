import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { createDebt } from '../../store/actions/debt/debtActions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class AddDebt extends Component {
    state = {
        name: '',
        amount: 0,
        interest: 0,
        basePayment: 0,
        paymentOccurrence: 'biweekly'
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
        const {res, error} = this.props;
        const paymentOccurenceOptions = [
            {value: "weekly", label: "Weekly"},
            {value: "biweekly", label: "Bi-Weekly"},
            {value: "monthly", label: "Monthly"}
        ];
        
        if(res){
            if(res.code === 200){
                return (
                    <Redirect to='/'/>
                )
            }

            if(error) {
                return(
                    <div className="container error">
                        <div className="row">
                            <div className="col s4 offset-s4">
                                <div className="center-align">
                                    <FontAwesomeIcon icon={['fas', "exclamation-circle"]} style={{color: '#E24769'}} size="8x"/> <br />
                                    <h5>Error: {error}</h5>
                                </div>
                            </div>
                        </div>
                    </div>   
                )
            }
        }

        return (
            <div className="container">
                <form className='white' onSubmit={this.handleSubmit}>
                    <h5 className='grey-text text-darken-3'>Add Debt</h5>
                    <div className='input-field col s12'>
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" onChange={this.handleChange} />
                    </div>
                    <div className='input-field col s12'>
                        <label htmlFor="amount">Amount</label>
                        <input type="number" id="amount" onChange={this.handleChange} step="any" min="0" />
                    </div>
                    <div className='input-field col s12'>
                        <label htmlFor="interest">Interest (%)</label>
                        <input type="number" id="interest" onChange={this.handleChange} step="any" min="0" />
                    </div>
                    <div className='input-field col s12'>
                        <label htmlFor="basePayment">Base Payment</label>
                        <input type="number" id="basePayment" onChange={this.handleChange} step="any" min="0" />
                    </div>
                    <div className="input-field col s12">
                        <select value="1" onChange={this.handleChange}>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                        </select>
                        <label>Materialize Select</label>
                    </div>
                    <div className='input-field col s12'>
                        <button className="btn pink lighten-1 z-depth-2">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    res: state.debt.res,
    error: state.debt.error
})

const mapDispatchToProps = (dispatch) => {
    return {
        createDebt: (debt) => createDebt(debt, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddDebt)