import {
  ADD_NUMBER,
  SUB_NUMBER
} from './constants.js'

const addAction = (count) => ({
  type: ADD_NUMBER,
  number: count
})

const subAction = (count) => ({
  type: SUB_NUMBER,
  number: count
})

export {
  addAction,
  subAction
}