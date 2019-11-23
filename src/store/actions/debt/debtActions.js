export const createDebt = (debt, dispatch) => {
    let userID = '2xw2jSh6PonUi4DAZGjQGeYujWcJnjwoPnYjGJIyXbsZ29VcBcrRvwBEKaG7I8cx4jf0FhP7V3ZeiS0tNjD9Qsm2Lo8ANIr8CRD2juxo3a1daPfnPzJVzIzVrYAE2cGZIjApnwsge8UoJh33Aqlt0yoeysugqVEp1994OsId3YdjemVSvAY4UsizSKvSJUiWPiZl03o3fXsw4iCI4ogfdGU0arU7QIaEPo65VkBdxfhO8GnH8dDs8fqG0aPEU8v';

    let error = void 0;
    

    // make async call to API.
    fetch('http://debtapi.com/debt/add', {
        method: 'POST',
        header: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({debt: debt, user: userID})
    })
    .then(res => res.json())
    .then(res => {          
        dispatch({type: 'CREATE_DEBT', res: res, error: error});
    });         
};

export const getDebt = (debtID, dispatch) => {
    let error = void 0;
    let loading = true;

    fetch('http://debtapi.com/debt/' + debtID)
        .then(res =>res.json())
        .then(res => {
            if(res.code !== 200){
                error = res.message;
            }
            loading = false;
            dispatch({type: 'FETCH_DEBT', debt: res.data.debt, payments: res.data.payments, loading: loading, error: error});
        });
}

export const getDebts = (dispatch) => {
    let debts = {};
    let error = void 0;
    let loading = true;
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
        debts = res.data;
        if(res.code !== 200){
            error = res.message;
        }
        if(debts) {loading = false;}
        dispatch({type: 'FETCH_DEBTS', debts: debts, error: error, loading: loading});
    }); 
}