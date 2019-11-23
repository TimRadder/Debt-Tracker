import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getDebt } from '../../store/actions/debt/debtActions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class ViewDebt extends Component {

    state = {
        error: void 0,
        loading: true,
        debt: {
            id: '',
            name: '',
            amount: 0,
            interest: 0,
            basePayment: 0,
            paymentOccurrence: '',
            alternateUsers: []
        }
    }

    componentDidMount(){
        const {match} = this.props;
        const  userID = match.params.id;

        this.props.getDebt(userID);
    }

    render() {
        const {loading, error} = this.props;
        console.log(this.props);
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

        if(loading){
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

        return (
            <div className="container">
                <p>View Debt Here</p>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    debt: state.debt,
    loading: state.loading,
    error: state.error
});

const mapDispatchToProps = (dispatch) => {
    return {
        getDebt: (userID) => getDebt(userID, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewDebt)