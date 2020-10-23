import * as actionTypes from './constants';
import { getBanners } from '@/services/recommend'

export const changeBannerAction = (topBanners) => ({
  type: actionTypes.CHANGE_TOP_BANNERS,
  topBanners
})

export const getBannerAction = (dispatch) => {
  return dispatch => {
    getBanners().then(res => {
      const {banners} = res.data
      dispatch(changeBannerAction(banners))
    })
  }
}