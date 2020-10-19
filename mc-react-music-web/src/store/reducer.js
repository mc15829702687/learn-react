import { reducer as recommendReducer } from '@/pages/discover/c-pages/recommend/store';
import { combineReducers } from 'redux';

const reducer = combineReducers({ recommend: recommendReducer })
export default reducer;