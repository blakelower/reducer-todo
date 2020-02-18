import React from 'react'
import { connect } from 'react-redux'
import { addFriend, changeInput, markFriendMarried } from './store/actionCreators'
// STEP-9 BRING IN THE ACTION CREATORS
import './App.css'

function App({
  // PROPS COME IN SEVERAL FLAVORS:
  // A- data from redux state
  formValues,
  friends,
  // B- callbacks to change state (action creators)
  changeInput,
  addFriend,
  markFriendMarried,
  // C- props actually injected by the parent component
}) {
  // Event listeners (we still need 'em)
  const onChange = event => {
    // get the interesting stuff from the event
    // call an action creator that comes through props
    changeInput({
      inputName: event.target.name,
      inputValue: event.target.value,
    })
  }
  const onSubmit = event => {
    // use the event to prevent an undesirable reload
    // call an action creator that comes through props
    event.preventDefault()
    // call an action creator that comes through props
    addFriend({
      fname: formValues.fname,
      lname: formValues.lname,
    });
  }
  const onMarkFriendMarried = id => event => {
    // call an action creator
    markFriendMarried(id)
  }

  return (
    <div className="App">
      {/* here we can add a new friend */}
      <h4>Add a new friend (married defaults to false)</h4>
      <form className='form' onSubmit={onSubmit}>
        <label>first name
        <input
            value={formValues.fname}
            onChange={onChange}
            name='fname'
          />
        </label><br />

        <label>last name
        <input
            value={formValues.lname}
            onChange={onChange}
            name='lname'
          />
        </label><br />

        <input type='submit' />
      </form>

      {/* list of current friends */}
      <h4>My friends:</h4>
      {
        friends.map(fr => (
          <div
            key={fr.id}
          >
            {fr.fname} {fr.lname} is{fr.married ? ' happily ' : ' NOT '}married
            <button onClick={onMarkFriendMarried(fr.id)}>Mark Married</button>
          </div>
        ))
      }
    </div>
  )
}

// STEP-8 USE connect FROM react-redux TO WRAP OUR COMPONENT
function mapStateToProps(state) {
  return {
    // explaining what props the component is interested in
    // left hand side of the colon is the prop received by the component
    // right hand side of the colon is what part of the redux state
    formValues: state.formValues,
    friends: state.friends,
    numberOfFriends: state.friends.length,
  }
}
export default connect(
  mapStateToProps,
  // object with action creators imported at the top,
  { addFriend, changeInput, markFriendMarried },
)(App)
