import * as types from './actionTypes'

// {
//   formValues: { // SLICE 1
//     fname: '',
//     lname: '',
//   },
//   friends: [    // SLICE 2
//     { id: someId, fname: 'Jane', lname: 'Doe', married: false },
//     { id: anotherId, fname: 'john', lname: 'Smith', married: false },
//   ],
// }

// STEP-3 CREATE ONE REDUCER FUNCTION PER SLICE OF STATE
const initialStateForm = { fname: '', lname: '' }
export function formReducer(state = initialStateForm, action) {
  // console.log(state)   // { fname: 'Blake', lname: 'S' }
  // console.log(action)  // { type: "INPUT_CHANGE", payload: { inputName: "lname", inputValue: "Sm" } }
  switch (action.type) {
    case types.INPUT_CHANGE:
      // return new "slice"
      return {
        ...state,
        [action.payload.inputName]: action.payload.inputValue
      }
    case types.ADD_FRIEND:
      return initialStateForm
    default:
      return state
  }
}

const initialStateFriends = []
export function friendsReducer(state = initialStateFriends, action) {
  debugger
  switch (action.type) {
    case types.ADD_FRIEND:
      return state.concat(action.payload)
    case types.MARK_MARRIED:
      return state.map(friend => {
        debugger
        if (friend.id === action.payload) {
          return {
            ...friend,
            married: !friend.married
          };
        }
        return friend;
      })
    default:
      return state
  }
}
