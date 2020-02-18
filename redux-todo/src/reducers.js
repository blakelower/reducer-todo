import * as types from './actionTypes';

//STEP 3
const initialStateForm = { fname: '', lname: '' }
export function formReducer(state = initialStateForm, action) {
  switch (action.type) {
    case types.INPUT_CHANGE:
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