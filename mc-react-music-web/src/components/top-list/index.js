import React, { memo } from "react";

import { getSizeImage } from "@/utils/format-utils";

import { TopListWrapper } from "./style";

export default memo(function MCTopList(props) {
  // state and props
  const { info } = props;
  const { tracks = [] } = info;

  // redux hooks

  // other hooks

  return (
    <TopListWrapper>
      <div className="header">
        <div className="image">
          <img src={getSizeImage(info.coverImgUrl, 80)} alt={info.name} />
          <a href="/todo" className="image_cover">
            {info.name}
          </a>
        </div>
        <div className="info">
          <a href="/todo" className="name text-nowrap">
            {info.name}
          </a>
          <div>
            <button className="play btn sprite_02"></button>
            <button className="addto btn sprite_02"></button>
          </div>
        </div>
      </div>
      <div className="list">
        {tracks.slice(0, 10).map((item, index) => {
          return (
            <div key={item.id} className="list-item">
              <div className="ranking">{index + 1}</div>
              <div className="info">
                <div className="name text-nowrap">{item.name}</div>
                <div className="operate">
                  <button className="btn play sprite_02"></button>
                  <button className="btn addto sprite_icon2"></button>
                  <button className="btn favor sprite_02"></button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="footer">
        <a href="/todo">查看全部></a>
      </div>
    </TopListWrapper>
  );
});
