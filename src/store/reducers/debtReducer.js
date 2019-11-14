const initState = {
    debts: [],
    loading: true,
    error: null
}

const debtReducer = (state = initState, action) => {
    switch(action.type){
        case 'CREATE_DEBT':
            console.log("Created the Project!", action.debt);
            break;
        case 'FETCH_DEBTS':
            state.debts = action.debts
            state.error = false;
            state.loading = false;
            break;
        default:
            break;
    }
    //console.log("Returning the state", state);
    return state
}

export default debtReducer