import {getLyric} from '@/services/player';
import {lrcParse} from '@/utils/lrc-parse';
import * as actionTypes from "./constants";

export const changeCurrentSongIndexAction = (currentSongIndex) => ({
  type: actionTypes.CHANGE_CURRENT_SONG_INDEX,
  currentSongIndex,
});

export const changeCurrentSongAction = (currentSong) => ({
  type: actionTypes.CHANGE_CURRENT_SONG,
  currentSong,
});

export const getCurrentIndexAndSongAction = (index, playList) => {
  return dispatch => {
    dispatch(changeCurrentSongIndexAction(index));
    dispatch(changeCurrentSongAction(playList[index]));
  };
};


// 改变当前歌词
export const changeLyricsAction = (lyrics) => ({
  type: actionTypes.CHANGE_LYRICS,
  lyrics
})
export const changeLyricCurrentIndex = (index) => ({
  type: actionTypes.CHANGE_LYRIC_CURRENT_INDEX,
  lyricCurrentIndex: index
})


// 获取当前歌词
export const getDetailLyricAction = (id) => {
  return dispatch => {
    getLyric(id).then(res => {
      const lrcString = res.data.lrc.lyric;
      const lyrics = lrcParse(lrcString);
      dispatch(changeLyricsAction(lyrics))
    })
  }
}