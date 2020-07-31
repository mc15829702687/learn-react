import {createStore, applyMiddleware, compose} from 'redux'
import reducer from './reducer'

// 中间件
import thunkMiddleware from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// 通过applyMiddleware来结合多个Middleware, 返回一个enhancer
const enhancer = composeEnhancers(applyMiddleware(thunkMiddleware))

// 将enhancer作为第二个参数传入到createStore中
const store = createStore(reducer, enhancer)

export default store
