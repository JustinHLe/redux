import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import allReducer from './reducers';
import { Provider } from 'react-redux';
// //ACTION
// const increment = () => {
//   return {
//     type: "INCREMENT"
//   }
// }
// const decrement = () => {
//   return {
//     type: "DECREMENT"
//   }
// }

// //REDUCER
// const counter = (state = 0, action) => {
//   switch(action.type){
//     case "INCREMENT":
//       return state + 1;
//     case "DECREMENT":
//       return state - 1;
//     default:
//       return state
//   }
// }

// let store = configureStore({
//   reducer: reducer
// })
// store.subscribe(() => console.log(store.getState()))

// //DISPATCH
// store.dispatch(increment())


const store = configureStore({
  reducer: allReducer,
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
