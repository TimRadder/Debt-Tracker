import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getDebts } from '../../store/actions/debt/debtActions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Debt from './debt'

class Dashboard extends Component {

    componentDidMount(){
        this.props.getDebts();
    }

    render() {
        const {debts, loading, error} = this.props;
        if(error){
            return(
                <div className="container center-screen">
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

        if(loading) {
            return(
                <div className="container center-screen">
                    <div className="row">
                        <div className="col s4 offset-s4">
                            <div className="center-align">
                                <FontAwesomeIcon icon={['fas', "spinner"]} style={{color: '#43A1F3'}} size="8x" pulse /> <br />
                            </div>
                        </div>
                    </div>
                </div>                
            )
        }

        if(debts.length > 0){
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

        return (
            <div className="container center-screen">
                <div className="row">
                    <div className="col s12 m6 offset-m3">
                        <div className="center-align">
                            <FontAwesomeIcon icon={["fad", "window-close"]} style={{color: '#43A1F3'}} size="8x" />
                            <h5>You currently have no debts to track!</h5>
                        </div>
                    </div>
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
