export const createDebt = (debt, dispatch) => {
        // make async call to API
        dispatch({type: 'CREATE_DEBT', debt: debt});
};

export const getDebts = (dispatch) => {
    let debts = {};
    let userID = '2xw2jSh6PonUi4DAZGjQGeYujWcJnjwoPnYjGJIyXbsZ29VcBcrRvwBEKaG7I8cx4jf0FhP7V3ZeiS0tNjD9Qsm2Lo8ANIr8CRD2juxo3a1daPfnPzJVzIzVrYAE2cGZIjApnwsge8UoJh33Aqlt0yoeysugqVEp1994OsId3YdjemVSvAY4UsizSKvSJUiWPiZl03o3fXsw4iCI4ogfdGU0arU7QIaEPo65VkBdxfhO8GnH8dDs8fqG0aPEU8v';
        
    fetch('http://debtapi.com/debt', {
        method: 'POST',
        header: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({id: userID})
    })
    .then(res => res.json())
    .then(res => {
        let error = void 0;
        let loading = true;
        console.log("Response: ", res);
        debts = res.data;
        if(res.code !== 200){
            error = res.message;
        }
        if(debts) {loading = false;}
        dispatch({type: 'FETCH_DEBTS', debts: debts, error: error, loading: loading});
    }); 
}