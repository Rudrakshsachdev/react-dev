import { useState, useReducer, useRef } from 'react'
import { Counter } from './components/Counter';
import FocusInput from './components/FocusInput';


const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}



function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  // const inputElement = useRef(null);

  // console.log(inputElement);


  return (
    <div>
      {/* <h1>Count: {state.count}</h1>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>

      <Counter /> */}

      {/* <input type="text" ref={inputElement}  />
      <button onClick={() => inputElement.current.focus()}>Focus Input</button> */}

    <FocusInput />    

    </div>
  );
}

export default App;


