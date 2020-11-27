import React, { memo, useEffect, useRef, useState, useCallback } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { changeCurrentIndexAndSongAction } from "../store/actionCreators";

import {
  getSizeImage,
  getPlayUrl,
  formatMinuteSecond,
} from "@/utils/format-utils";

import { Slider } from "antd";
import { AppPlayBarWrapper, Control, PlayInfo, Operator } from "./style";

export default memo(function MCAppPlayBar() {
  // state and props
  const [isPlaying, setIsPlaying] = useState(false);
  const [isChanging, setIsChanging] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [progressVal, setProgressVal] = useState(0);

  // redux hooks
  const { currentSong, currentSongIndex, playList } = useSelector(
    (state) => ({
      currentSong: state.getIn(["player", "currentSong"]),
      currentSongIndex: state.getIn(["player", "currentSongIndex"]),
      playList: state.getIn(["player", "playList"]),
    }),
    shallowEqual
  );
  const dispacth = useDispatch();


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

  // 其他业务逻辑
  const play = () => {
    isPlaying
      ? audioRef.current.pause()
      : audioRef.current.play().catch((err) => setIsPlaying(false));
    setIsPlaying(!isPlaying);
  };

  const timeUpdate = useCallback(
    (e) => {
      if (!isChanging) {
        setCurrentTime(e.target.currentTime * 1000);
        return setProgressVal((currentTime / duration) * 100);
      }
      audioRef.current.pause();
    },
    [currentTime, isChanging]
  );

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
      audioRef.current.play();
      setIsChanging(false);
    },
    [currentTime]
  );

  const changeCurrentSongIndex = (index) => {
    const currentIndex = currentSongIndex + index;
    if (currentIndex === -1) {
      return dispacth(changeCurrentIndexAndSongAction(playList.length - 1, playList));
    }
    
    if (currentIndex === playList.length) {
      return dispacth(changeCurrentIndexAndSongAction(0, playList));
    }
    dispacth(changeCurrentIndexAndSongAction(currentIndex, playList));
  };

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
      <audio ref={audioRef} onTimeUpdate={timeUpdate} />
    </AppPlayBarWrapper>
  );
});
