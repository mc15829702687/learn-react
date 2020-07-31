import {
  ADD_NUMBER,
  SUB_NUMBER
} from './constants.js'

// 创建一个状态对象initState
const initState = {
  counter: 0
}

const reducer = (state = initState, action) => {
  switch(action.type) {
    case ADD_NUMBER: return {...state, counter: state.counter + action.number}
    case SUB_NUMBER: return {...state, counter: state.counter - action.number}
    default: return state
  }
}

export default reducer