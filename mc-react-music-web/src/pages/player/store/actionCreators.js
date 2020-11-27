import * as actionTypes from "./constants";

export const changeCurrentSongIndexAction = (currentSongIndex) => ({
  type: actionTypes.CHANGE_CURRENT_SONG_INDEX,
  currentSongIndex,
});

export const changeCurrentSongAction = (currentSong) => ({
  type: actionTypes.CHANGE_CURRENT_SONG,
  currentSong,
});

export const changeCurrentIndexAndSongAction = (index, playList) => {
  return dispatch => {
    dispatch(changeCurrentSongIndexAction(index));
    dispatch(changeCurrentSongAction(playList[index]));
  };
};
