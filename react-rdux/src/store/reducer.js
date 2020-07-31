import {
  ADD_NUMBER,
  SUB_NUMBER,
  CHANGE_BANNERS,
  CHANGE_RECOMMENDS
} from './constants.js'

// 创建一个状态对象initState
const initState = {
  counter: 0,
  banners: [],
  recommends: []
}

const reducer = (state = initState, action) => {
  switch(action.type) {
    case ADD_NUMBER: return {...state, counter: state.counter + action.number}
    case SUB_NUMBER: return {...state, counter: state.counter - action.number}
    case CHANGE_BANNERS: return {...state, banners: action.banners}
    case CHANGE_RECOMMENDS: return {...state, recommends: action.recommends}
    default: return state
  }
}

export default reducer