import React, { memo, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getNewAlbumAction } from "../../store/actionCreators";

import { Carousel } from "antd";
import MCThemeHeaderRcm from "@/components/theme-header-rcm";
import MCNewAlbumCover from "@/components/new-album-cover";
import { NewAlbumWrapper } from "./style";

export default memo(function MCNewAlbum() {
  // state and props

  // react redux
  const { newAlbum } = useSelector((state) => ({
    newAlbum: state.getIn(['recommend', 'newAlbum'])
  }));
  
  const dispatch = useDispatch();

  // other redux
  useEffect(() => {
    dispatch(getNewAlbumAction(10));
  }, [dispatch]);
  const albumRef = useRef()

  return (
    <NewAlbumWrapper>
      <MCThemeHeaderRcm title="新碟上架" moreLink="/discover/album" />
      <div className="content">
        <div className="arrow sprite_02 arrow-left" onClick={e => albumRef.current.prev()}></div>
        <div className="album">
          <Carousel ref={albumRef} dots={false}>
            {[0, 1].map((item, index) => {
              return (
                <div className="page" key={item}>
                  {newAlbum.slice(item * 5, (item + 1) * 5).map((iten) => {
                    return <MCNewAlbumCover key={iten.id} info={iten}/>;
                  })}
                </div>
              );
            })}
          </Carousel>
        </div>
        <div className="arrow sprite_02 arrow-right" onClick={e => albumRef.current.next()}></div>
      </div>
    </NewAlbumWrapper>
  );
});
