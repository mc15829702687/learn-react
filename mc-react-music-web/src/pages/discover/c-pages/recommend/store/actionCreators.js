import * as actionTypes from "./constants";
import {
  getBanners,
  getHotRecommend,
  getNewAlubum,
  getTopList,
  getSettleSingerList
} from "@/services/recommend";

export const changeBannerAction = (res) => ({
  type: actionTypes.CHANGE_TOP_BANNERS,
  topBanners: res.data.banners,
});
export const changeHotRecommendAction = (res) => ({
  type: actionTypes.CHANGE_HOT_RECOMMEND,
  hotRecommend: res.data.result,
});
export const changeNewAlbumAction = (res) => ({
  type: actionTypes.CHANGE_NEW_ALBUMS,
  newAlbum: res.data.albums,
});

export const changeTopUpListAction = (res) => ({
  type: actionTypes.CHANGE_TOP_UP_LIST,
  topUpList: res.data.playlist,
});
export const changeTopNewListAction = (res) => ({
  type: actionTypes.CHANGE_TOP_NEW_LIST,
  topNewList: res.data.playlist,
});
export const changeTopOriginListAction = (res) => ({
  type: actionTypes.CHANGE_TOP_ORIGIN_LIST,
  topOriginList: res.data.playlist,
});
export const changeSettleSinger = (res) => ({
  type: actionTypes.CHANGE_SETTLE_SINGER,
  settleSingerList: res.data.artists
})

export const getBannerAction = () => {
  return (dispatch) => {
    getBanners().then((res) => {
      dispatch(changeBannerAction(res));
    });
  };
};

export const getHotRecommendAction = (limit) => {
  return (dispacth) => {
    getHotRecommend(limit).then((res) => {
      dispacth(changeHotRecommendAction(res));
    });
  };
};

export const getNewAlbumAction = (limit) => {
  return (dispacth) => {
    getNewAlubum(limit).then((res) => {
      dispacth(changeNewAlbumAction(res));
    });
  };
};

export const getTopListAction = (idx) => {
  return (dispacth) => {
    getTopList(idx).then((res) => {
      switch (idx) {
        case 3:
          dispacth(changeTopUpListAction(res));
          break;
        case 0:
          dispacth(changeTopNewListAction(res));
          break;
        case 2: 
          dispacth(changeTopOriginListAction(res));
          break;
        default:
          console.log('其他数据处理！')
      }
    });
  };
};

// 入驻歌手列表数据
export const getSettleSinger = () => {
  return dispatch => {
    getSettleSingerList(5, 5001).then(res => {
      dispatch(changeSettleSinger(res))
    })
  }
}
