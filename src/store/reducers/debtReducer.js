const initState = {
    debts: [],
    loading: true,
    error: void 0
}

const debtReducer = (state = initState, action) => {
    switch(action.type){
        case 'CREATE_DEBT':
            return {
                res: action.res,
                error: action.error
            }
        case 'FETCH_DEBTS':
            return {
                debts: action.debts,
                loading: action.loading,
                error: action.error
            }
        case 'FETCH_DEBT': 
            return {
                debt: action.debt,
                payments: action.payments,
                error: action.error
            }
        default:
            return state;
    }
    
}

export default debtReducer