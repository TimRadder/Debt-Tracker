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
        paymentOccurrence: 'biweekly',
        options: [
            {value: 'weekly', label: 'Weekly'},
            {value: 'biweekly', label: 'Bi-Weekly'},
            {value: 'monthly', label: 'Monthly'},
        ]
    };

    handleChange = (e) => { 
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        //this.props.createDebt(this.state.debt);
    }

    render() {
        const {res, error} = this.props;
        
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
            <div className="container shadow">
                <form className='white' onSubmit={this.handleSubmit}>
                    <h5 className='grey-text text-darken-3'>Add Debt</h5>
                    <div className='input-field col s12'>
                        <FontAwesomeIcon icon={['fad', 'file-signature']} className='prefix' style={{color: '#43A1F3'}}/>
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" onChange={this.handleChange} />
                    </div>
                    <div className='input-field col s12'>
                        <FontAwesomeIcon icon={['fad', 'sack-dollar']} className='prefix' style={{color: '#43A1F3'}}/>
                        <label htmlFor="amount">Amount</label>
                        <input type="number" id="amount" onChange={this.handleChange} step="any" min="0" />
                    </div>
                    <div className='input-field col s12'>
                        <FontAwesomeIcon icon={['fas', 'percentage']} className='prefix' style={{color: '#43A1F3'}}/>
                        <label htmlFor="interest">Interest</label>
                        <input type="number" id="interest" onChange={this.handleChange} step="any" min="0" />
                    </div>
                    <div className='input-field col s12'>
                        <FontAwesomeIcon icon={['fad', 'piggy-bank']} className='prefix' style={{color: '#43A1F3'}}/>
                        <label htmlFor="basePayment">Base Payment</label>
                        <input type="number" id="basePayment" onChange={this.handleChange} step="any" min="0" />
                    </div>
                    <div className="input-field col s12">                    
                        <FontAwesomeIcon icon={['fad', 'analytics']} className='prefix' style={{color: '#43A1F3'}}/>                        
                        <label>Materialize Select</label>
                        <select value={this.state.paymentOccurrence} onChange={this.handleChange} name="paymentOccurrence">
                            {this.state.options.map(option => (
                                <option key={option.value} value={option.value}>{option.label}</option>
                            ))}
                        </select>
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