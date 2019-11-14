import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getDebts } from '../../store/actions/debt/debtActions'

import Debt from './debt'

class Dashboard extends Component {

    componentDidMount(){
        this.props.getDebts();
    }

    render() {
        const {debts, loading, error} = this.props;
        if(error){
            return(
                <div>
                    <p>
                        An Error has Occurred... Ohhh no!
                    </p>
                </div>
            )
        }

        if(loading) {
            return(
                <p>Please hold while we load...</p>
            )
        }
        return (
            <div className="container">
                <h4 className='grey-text text-darken-3'>Dashboard</h4>
                <div className='row'>
                { debts && debts.map(debt => {
                    return (
                        <Debt debt={debt} key={debt.id}></Debt>
                    )
                })}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    debts: state.debt.debts,
    loading: state.debt.loading,
    error: state.debt.error
})
const mapDispatchToProps = (dispatch) => {
    return {
        getDebts: () => getDebts(dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
