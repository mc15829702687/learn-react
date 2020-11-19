import React, { memo } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { getSizeImage } from "@/utils/format-utils";

import { Slider } from "antd";
import { AppPlayBarWrapper, Control, PlayInfo, Operator } from "./style";

export default memo(function MCAppPlayBar() {
  const { currentSong } = useSelector((state) => ({
    currentSong: state.getIn(["player", "currentSong"]),
  }));

  return (
    <AppPlayBarWrapper className="sprite_playbar">
      <div className="content wrap-v2">
        <Control>
          <button className="sprite_playbar prev"></button>
          <button className="sprite_playbar play"></button>
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
              <Slider defaultValue={30} />
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
    </AppPlayBarWrapper>
  );
});
