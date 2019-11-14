import authReducer from './authReducer'
import debtReducer from './debtReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    auth: authReducer,
    debt: debtReducer
});

export default rootReducer