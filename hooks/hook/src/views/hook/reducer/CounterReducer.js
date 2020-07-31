import React, { PureComponent, useReducer } from 'react'

// useReducer仅仅是useState的一种替代方案
function CounterReducer(state, action) {
  switch(action.type) {
    case 'increament': return {...state, count: state.count + 1}
    case 'decreament': return {...state, count: state.count - 1}
    default: return state
  }
}

function Home() {
  const [state, dispatch] = useReducer(CounterReducer, {count: 0})

  return(
    <div>
      <h2>Home: {state.count}</h2>
      <button type="button" onClick={e => dispatch({type: 'increament'})}>+1</button>
      <button type="button" onClick={e => dispatch({type: 'decreament'})}>-1</button>
    </div>
  )
}

function Profile() {
  const [state, dispatch] = useReducer(CounterReducer, {count: 0})

  return(
    <div>
      <h2>Profile: {state.count}</h2>
      <button type="button" onClick={e => dispatch({type: 'increament'})}>+1</button>
      <button type="button" onClick={e => dispatch({type: 'decreament'})}>-1</button>
    </div>
  )
}

export default class HookUseReduce extends PureComponent {
  render() {
    return (
      <div>
        <Home/>
        <Profile/>
      </div>
    )
  }
}