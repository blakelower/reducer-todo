import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";

// STEP-1 DESIGN APPLICATION STATE
// {
//   formValues: {       // SLICE 1
//     fname: '',
//     lname: '',
//   },
//   friends: [          // SLICE 2
//     { id: someId, fname: 'Jane', lname: 'Doe', married: false },
//     { id: someId, fname: 'Jane', lname: 'Doe', married: false },
//     { id: anotherId, fname: 'john', lname: 'Smith', married: false },
//   ],
//   numberOfFriends: 3, // SLICE 3 BAD BAD BAD BAD!!!!!!!! this can be computed from slice 2
// }
const combinedReducer = combineReducers({
    formValues: formReducer,
    friends: friendsReducer,
  })

//   / STEP-4 USE combineReducers FROM redux TO MAKE A SINGLE REDUCER
  //    - takes an object
  //    - give the keys nice names, because those are the names of the slices of state
  const combinedReducer = combineReducers({
    formValues: formReducer,
    friends: friendsReducer,
  })
  
ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
