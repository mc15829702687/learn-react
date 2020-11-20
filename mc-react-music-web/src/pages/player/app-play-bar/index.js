import React, { memo, useEffect, useRef, useState } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { getSizeImage, getPlayUrl } from "@/utils/format-utils";

import { Slider } from "antd";
import { AppPlayBarWrapper, Control, PlayInfo, Operator } from "./style";

export default memo(function MCAppPlayBar() {
  // state and props
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  // redux hooks
  const { currentSong } = useSelector((state) => ({
    currentSong: state.getIn(["player", "currentSong"]),
  }), shallowEqual);

  // other hooks
  const audioRef = useRef();
  useEffect(() => {
    audioRef.current.src = getPlayUrl(currentSong.id);
    audioRef.current.play().then(res => {
      setIsPlaying(true)
    }).catch(err => {
      setIsPlaying(false)
    });
    setDuration(currentSong.dt)
  }, [currentSong]);
  
  // 其他业务逻辑
  const play = () => {
    isPlaying ? audioRef.current.pause() : audioRef.current.play().catch(err => setIsPlaying(false));
    setIsPlaying(!isPlaying);
  }

  const timeUpdate = (e) => {
    // const currentTime = e.target.currentTime;
    // setProgress()
  }

  return (
    <AppPlayBarWrapper className="sprite_playbar">
      <div className="content wrap-v2">
        <Control isPlaying={isPlaying}>
          <button className="sprite_playbar prev"></button>
          <button className="sprite_playbar play" onClick={e => play()}></button>
          <button className="sprite_playbar next"></button>
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
              <Slider defaultValue={0} />
              <div className="time">
                <span className="now-time">00:38</span> 
                <span className="divider">/</span>
                <span className="total-time">04:03</span>
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
      <audio ref={audioRef} onTimeUpdate={timeUpdate}/>
    </AppPlayBarWrapper>
  );
});
