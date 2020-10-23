import { reducer as recommendReducer } from "@/pages/discover/c-pages/recommend/store";
import { combineReducers } from "redux-immutable";

const reducer = combineReducers({ recommend: recommendReducer });
export default reducer;
