export const createDebt = (debt) => {
    return (dispatch, getState) => {
        // make async call to API
        dispatch({type: 'CREATE_DEBT', debt: debt});
    }
};

export const getDebts = () => {
    return (dispatch, getState) => {
        let debts = {};
        let userID = '2xw2jSh6PonUi4DAZGjQGeYujWcJnjwoPnYjGJIyXbsZ29VcBcrRvwBEKaG7I8cx4jf0FhP7V3ZeiS0tNjD9Qsm2Lo8ANIr8CRD2juxo3a1daPfnPzJVzIzVrYAE2cGZIjApnwsge8UoJh33Aqlt0yoeysugqVEp1994OsId3YdjemVSvAY4UsizSKvSJUiWPiZl03o3fXsw4iCI4ogfdGU0arU7QIaEPo65VkBdxfhO8GnH8dDs8fqG0aPEU8v';
        fetch('http://debtapi.com/debt/' + userID)
            .then(res => res.json())
            .then(res => {
                //console.log("Response: ", res);
                debts = res.data;
                dispatch({type: 'FETCH_DEBTS', debts: debts});
            });    
    }
}