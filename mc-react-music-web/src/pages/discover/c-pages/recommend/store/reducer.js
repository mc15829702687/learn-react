import { CHANGE_TOP_BANNERS } from "./constants";
import {Map} from 'immutable';

const initalState = Map({
  topBanners: []
})

function reducer(state = initalState, action) {
  switch(action.type) {
    case CHANGE_TOP_BANNERS: return state.set('topBanners', action.topBanners);
    default: return state;
  }
}

export default reducer