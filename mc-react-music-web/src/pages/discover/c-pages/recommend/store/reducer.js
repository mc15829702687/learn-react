import * as actionType from "./constants";
import { Map } from "immutable";

const initalState = Map({
  topBanners: [],
  hotRecommend: [],
  newAlbum: [],
  topUpList: [],
  topNewList: [],
  topOriginList: [],
  settleSingerList: [],
});

function reducer(state = initalState, action) {
  switch (action.type) {
    case actionType.CHANGE_TOP_BANNERS:
      return state.set("topBanners", action.topBanners);
    case actionType.CHANGE_HOT_RECOMMEND:
      return state.set("hotRecommend", action.hotRecommend);
    case actionType.CHANGE_NEW_ALBUMS:
      return state.set("newAlbum", action.newAlbum);
    case actionType.CHANGE_TOP_UP_LIST:
      return state.set("topUpList", action.topUpList);
    case actionType.CHANGE_TOP_NEW_LIST:
      return state.set("topNewList", action.topNewList);
    case actionType.CHANGE_TOP_ORIGIN_LIST:
      return state.set("topOriginList", action.topOriginList);
    case actionType.CHANGE_SETTLE_SINGER:
      return state.set("settleSingerList", action.settleSingerList);
    default:
      return state;
  }
}

export default reducer;
