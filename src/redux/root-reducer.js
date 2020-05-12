import { combineReducers } from "redux";

import userReducer from './pachete/pachete.reducer'

export default combineReducers({
    user: userReducer
})