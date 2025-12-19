import React from 'react'
import { reducer } from './CounterReducer';

export const Counter = () => {

  const [state, dispatch] = React.useReducer(reducer, { count: 0 });  

  return (
    <div>
        <h1>Count: {state.count}</h1>
    </div>
  )
}
