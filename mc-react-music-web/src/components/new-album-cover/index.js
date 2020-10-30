import React, { memo } from "react";
import PropTypes from 'prop-types';

import { getSizeImage } from "@/utils/format-utils";

import { NewAlbumWrapper } from "./style";

 function MCNewAlbumCover(props) {
  const { info, width, size, bgp } = props;

  return (
    <NewAlbumWrapper width={width} size={size} bgp={bgp}>
      <div className="album-image">
        <img src={getSizeImage(info.picUrl, 150)} alt={info.name} />
        <a href="/abc" className="cover sprite_cover">
          {info.name}
        </a>
        <i className="play sprite_icon"></i>
      </div>
      <div className="album-info">
        <div className="name text-nowrap">{info.name}</div>
        <div className="artist text-nowrap">{info.artist.name}</div>
      </div>
    </NewAlbumWrapper>
  );
};

MCNewAlbumCover.propTypes = {
  info: PropTypes.object.isRequired,
  width: PropTypes.string,
  size: PropTypes.string,
  bgp: PropTypes.string
}

MCNewAlbumCover.defaultProps = {
  width: '118px',
  size: '100px',
  bgp: '-570px'
}


export default memo(MCNewAlbumCover);