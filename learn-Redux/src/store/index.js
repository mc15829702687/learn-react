// // const redux = require('redux')
// import redux from 'redux'

// // 1. 创建一个对象，作为保存状态
// const initState = {
//   counter: 0
// }

// // 2. 创建store来存储这个状态（创建store时必须创建reducer）
// // 2.1 必须是纯函数
// const reducer = (state = initState, action) => {
//   switch(action.type) {
//     case 'INCREAMENT': return {...state, counter: state.counter + 1}
//     case 'DECREAMENT': return {...state, counter: state.counter - 1}
//     case 'ADD_NUMBER': return {...state, counter: state.counter + action.number}
//     default: return state
//   }
// }

// const store = redux.createStore(reducer)


// // 在派发action前, 监听store变化
// store.subscribe(() => {
//   console.log(store.getState())
// })

// // 3. 通过action 来修改state
// store.dispatch({
//   type: 'INCREAMENT'
// })

// store.dispatch({
//   type: 'DECREAMENT'
// })

// store.dispatch({
//   type: 'ADD_NUMBER',
//   number: 5
// })


import redux from 'redux'
import reducer from './reducer'

const store = redux.createStore(reducer)

export default store

