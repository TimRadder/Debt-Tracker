const initState = {
    debts: [],
    loading: true,
    error: null
}

const debtReducer = (state = initState, action) => {
    switch(action.type){
        case 'CREATE_DEBT':
            console.log("Created the Project!", action.debt);
            return state;
        case 'FETCH_DEBTS':
            return {
                debts: action.debts,
                loading: action.loading,
                error: action.error
            }
        default:
            return state;
    }
    
}

export default debtReducer