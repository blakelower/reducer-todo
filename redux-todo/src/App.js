  
import React, {useReducer} from 'react';
import { reducer, initialState } from './Reducer/reducer';
import Form from './components/Form';
import './App.css';

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addItem = (e, item) => {
    e.preventDefault();
    dispatch({ type: 'ADD_TODO', payload: item });
  };

  const clearCompleted = e => {
    e.preventDefault();
    dispatch({ type: 'CLEAR_COMPLETE' });
  };

  return (
   <div className='App'>
     <h1>Reducer Project</h1>
     <Form addItem={addItem} />
    </div>
  );
}

export default App;