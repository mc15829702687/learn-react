import * as actionTypes from './constants';
import { getBanners } from '@/services/recommend'

export const changeBannerAction = (banners) => ({
  type: actionTypes.CHANGE_BANNERS,
  banners
})

export const getBannerAction = () => {
  return dispatch => {
    getBanners().then(res => {
      const {banners} = res.data
      dispatch(changeBannerAction(banners))
    })
  }
}