import * as actionTypes from './constants';
import { getBanners, getHotRecommend, getNewAlubum, getTopList } from '@/services/recommend';

export const changeBannerAction = (res) => ({
  type: actionTypes.CHANGE_TOP_BANNERS,
  topBanners: res.data.banners
})
export const changeHotRecommendAction = (res) => ({
  type: actionTypes.CHANGE_HOT_RECOMMEND,
  hotRecommend: res.data.result
})
export const changeNewAlbumAction = res => ({
  type: actionTypes.CHANGE_NEW_ALBUMS,
  newAlbum: res.data.albums
})
export const changegetTopListAction = res => ({
  type: actionTypes.CHANGE_TOP_LIST,
  topList: res.data.playlist
})

export const getBannerAction = () => {
  return dispatch => {
    getBanners().then(res => {
      dispatch(changeBannerAction(res))
    })
  }
}

export const getHotRecommendAction = (limit) => {
  return dispacth => {
    getHotRecommend(limit).then(res => {
      dispacth(changeHotRecommendAction(res))
    })
  }
}

export const getNewAlbumAction = (limit) => {
  return dispacth => {
    getNewAlubum(limit).then(res => {
      dispacth(changeNewAlbumAction(res))
    })
  }
}

export const getTopListAction = (idx) => {
  return dispacth => {
    getTopList(idx).then(res => {
      dispacth(changegetTopListAction(res))
    })
  }
}