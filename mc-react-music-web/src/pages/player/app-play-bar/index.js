import React, { memo, useEffect, useRef, useState, useCallback } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  getCurrentIndexAndSongAction,
  getDetailLyricAction,
  changeLyricCurrentIndex,
} from "../store/actionCreators";

import {
  getSizeImage,
  getPlayUrl,
  formatMinuteSecond,
} from "@/utils/format-utils";

import { Slider, message } from "antd";
import { AppPlayBarWrapper, Control, PlayInfo, Operator } from "./style";

export default memo(function MCAppPlayBar() {
  // state and props
  const [isPlaying, setIsPlaying] = useState(false);
  const [isChanging, setIsChanging] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [progressVal, setProgressVal] = useState(0);

  // redux hooks
  const {
    currentSong,
    currentSongIndex,
    playList,
    lyrics,
    lyricCurrentIndex,
  } = useSelector(
    (state) => ({
      currentSong: state.getIn(["player", "currentSong"]),
      currentSongIndex: state.getIn(["player", "currentSongIndex"]),
      playList: state.getIn(["player", "playList"]),
      lyrics: state.getIn(["player", "lyrics"]),
      lyricCurrentIndex: state.getIn(["player", "lyricCurrentIndex"]),
    }),
    shallowEqual
  );
  const dispatch = useDispatch();

  // other hooks
  const audioRef = useRef();
  useEffect(() => {
    audioRef.current.src = getPlayUrl(currentSong.id);
    audioRef.current
      .play()
      .then((res) => {
        setIsPlaying(true);
      })
      .catch((err) => {
        setIsPlaying(false);
      });
    setDuration(currentSong.dt);
  }, [currentSong]);

  useEffect(() => {
    dispatch(getDetailLyricAction(currentSong.id));
  }, [dispatch, currentSong]);

  // 其他业务逻辑
  const play = useCallback(() => {

    isPlaying
      ? audioRef.current.pause()
      : audioRef.current.play().catch((err) => setIsPlaying(false));
    setIsPlaying(!isPlaying);
  }, [isPlaying]);

  const sliderChange = useCallback(
    (value) => {
      setIsChanging(true);
      setProgressVal(value);
      setCurrentTime((value / 100) * duration);
    },
    [duration]
  );
  const sliderAfterChange = useCallback(
    (value) => {
      audioRef.current.currentTime = currentTime / 1000;
      setIsChanging(false);
      setCurrentTime(currentTime / 1000);
      if (!isPlaying) play();
    },
    [currentTime, isPlaying, play]
  );

  const changeCurrentSongIndex = useCallback(
    (index) => {
      const currentIndex = currentSongIndex + index;
      if (currentIndex === -1) {
        return dispatch(
          getCurrentIndexAndSongAction(playList.length - 1, playList)
        );
      }

      if (currentIndex === playList.length) {
        return dispatch(getCurrentIndexAndSongAction(0, playList));
      }
      dispatch(getCurrentIndexAndSongAction(currentIndex, playList));
    },
    [dispatch, currentSongIndex, playList]
  );

  const timeUpdate = (e) => {
    if (!isChanging) {
      const currentTime = e.target.currentTime * 1000;
      setCurrentTime(currentTime);
      setProgressVal((currentTime / duration) * 100);

      let lyricsLength = lyrics.length;
      let i = 0;
      for (; i < lyricsLength; i++) {
        if (currentTime < lyrics[i].time) break;
      }

      const finalIndex = i - 1;
      if (finalIndex !== lyricCurrentIndex) {
        dispatch(changeLyricCurrentIndex(finalIndex));
        message.open({
          key: "lyric",
          duration: 0,
          content: lyrics[finalIndex] && lyrics[finalIndex].content,
          className: 'lyric-message'
        });
      }
      return;
    }
  };

  // 播放时间结束
  const timeEnd = useCallback(
    (e) => {
      changeCurrentSongIndex(1);
    },
    [changeCurrentSongIndex]
  );

  return (
    <AppPlayBarWrapper className="sprite_playbar">
      <div className="content wrap-v2">
        <Control isPlaying={isPlaying}>
          <button
            className="sprite_playbar prev"
            onClick={(e) => changeCurrentSongIndex(-1)}
          ></button>
          <button
            className="sprite_playbar play"
            onClick={(e) => play()}
          ></button>
          <button
            className="sprite_playbar next"
            onClick={(e) => changeCurrentSongIndex(1)}
          ></button>
        </Control>
        <PlayInfo>
          <div className="image">
            <NavLink to="/abc">
              <img
                src={getSizeImage(currentSong.al.picUrl, 34)}
                alt={currentSong.name}
              />
            </NavLink>
          </div>
          <div className="info">
            <div className="song">
              <span className="song-name">{currentSong.name}</span>
              <span className="singer-name">{currentSong.ar[0].name}</span>
            </div>
            <div className="progress">
              <Slider
                defaultValue={0}
                value={progressVal}
                onChange={sliderChange}
                onAfterChange={sliderAfterChange}
              />
              <div className="time">
                <span className="now-time">
                  {formatMinuteSecond(currentTime)}
                </span>
                <span className="divider">/</span>
                <span className="total-time">
                  {formatMinuteSecond(duration)}
                </span>
              </div>
            </div>
          </div>
        </PlayInfo>
        <Operator>
          <div className="left">
            <button className="btn sprite_playbar favor"></button>
            <button className="btn sprite_playbar share"></button>
          </div>
          <div className="right sprite_playbar">
            <button className="btn sprite_playbar volume"></button>
            <button className="btn sprite_playbar loop"></button>
            <button className="btn sprite_playbar playlist">3</button>
          </div>
        </Operator>
      </div>
      <audio ref={audioRef} onTimeUpdate={timeUpdate} onEnded={timeEnd} />
    </AppPlayBarWrapper>
  );
});
