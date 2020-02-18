import React from 'react'
import ReactDOM from 'react-dom'
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'
import { formReducer, friendsReducer } from './store/reducers'
import './index.css'
import App from './App'

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

// STEP-4 USE combineReducers FROM redux TO MAKE A SINGLE REDUCER
//    - takes an object
//    - give the keys nice names, because those are the names of the slices of state
const combinedReducer = combineReducers({
  formValues: formReducer,
  friends: friendsReducer,
})

// STEP-5 USE createStore FROM redux TO MAKE A STATE STORE
const store = createStore(
  // arg 1: the monster reducer
  combinedReducer,
  // null unless redux devtools is installed
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  // STEP-6 WRAP THE APPLICATION WITH A PROVIDER FROM react-redux
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'))
