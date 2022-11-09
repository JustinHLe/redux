import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import { combineReducers } from '@reduxjs/toolkit';

const allReducer = combineReducers({
    counterReducer,
    loggedReducer
})

export default allReducer
  