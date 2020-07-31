import {
  ADD_NUMBER,
  SUB_NUMBER,
  CHANGE_BANNERS,
  CHANGE_RECOMMENDS
} from './constants.js'

// 请求数据的接口
import { getMultiData } from '../network/home'

const addAction = (count) => ({
  type: ADD_NUMBER,
  number: count
})

const subAction = (count) => ({
  type: SUB_NUMBER,
  number: count
})

const bannerAction = (banners) => ({
  type: CHANGE_BANNERS,
  banners
})

const recommedsAction = (recommends) => ({
  type: CHANGE_RECOMMENDS,
  recommends
})

// 中间件返回的是函数
const getHomeMultiDataAction = () => {
  return (dispatch) => {
    getMultiData().then(res => {
      const banners = res.data.data.banner
      const recommends = res.data.data.recommend
      dispatch(bannerAction(banners.list))
      dispatch(recommedsAction(recommends.list))
    }).catch(err => console.log(err))
  }
}


export {
  addAction,
  subAction,
  bannerAction,
  recommedsAction,
  getHomeMultiDataAction
}