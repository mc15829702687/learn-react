import React, { memo } from "react";

import { getSizeImage, getCount } from "@/utils/format-utils";

import { SongsCoverWrapper } from "./style";

export default memo(function MCSongsCover(props) {
  const { info } = props;

  return (
    <SongsCoverWrapper>
      <div className="cover-top">
        <img src={getSizeImage(info.picUrl, 140)} alt={info.name} />
        <div className="cover sprite_cover">
          <div className="info sprite_cover">
            <span>
              <i className="erji sprite_icon"></i>
              {getCount(info.playCount)}
            </span>
            <i className="play sprite_icon"></i>
          </div>
        </div>
      </div>
      <div className="cover-bottom text-nowrap">{info.name}</div>
      <div className="cover-source text-nowrap">
        by {info.copywriter} || {info.nickname}
      </div>
    </SongsCoverWrapper>
  );
});
