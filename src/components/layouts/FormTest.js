import React, { Component } from 'react';

import Select from './Select';

class FormTest extends Component {
    state = {
        paymentOccurrence: 'weekly',
        options: [
            {value: 'weekly', label: 'Weekly'},
            {value: 'biweekly', label: 'Bi-Weekly'},
            {value: 'monthly', label: 'Monthly'},
        ]
    }



    handleChange(e) {
        console.log(e);
    }


    render() {
        return(
            <div className="container shadow">
                <form className="white">
                    <Select title={'Payment Occurrence'} name={'paymentOccurrence'} options={this.state.options} value={this.state.paymentOccurrence} placeholder = {'Select Payment Frequency'} handleChange={this.handleChange}  />
                </form>
            </div>
        )
    }
}

export default FormTest