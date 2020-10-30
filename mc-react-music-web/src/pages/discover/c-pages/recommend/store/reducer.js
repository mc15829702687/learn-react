import {
  CHANGE_TOP_BANNERS,
  CHANGE_HOT_RECOMMEND,
  CHANGE_NEW_ALBUMS,
  CHANGE_TOP_LIST,
} from "./constants";
import { Map } from "immutable";

const initalState = Map({
  topBanners: [],
  hotRecommend: [],
  newAlbum: [],
  topList: [],
});

function reducer(state = initalState, action) {
  switch (action.type) {
    case CHANGE_TOP_BANNERS:
      return state.set("topBanners", action.topBanners);
    case CHANGE_HOT_RECOMMEND:
      return state.set("hotRecommend", action.hotRecommend);
    case CHANGE_NEW_ALBUMS:
      return state.set("newAlbum", action.newAlbum);
    case CHANGE_TOP_LIST:
      return state.set("topList", action.topList);
    default:
      return state;
  }
}

export default reducer;
