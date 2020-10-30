import React, { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getHotRecommendAction } from "../../store/actionCreators";

import ThemeHeaderRcm from "@/components/theme-header-rcm";
import MCSongsCover from "@/components/songs-cover";

import { HotRecommmendWrapper, Content } from "./style";

export default memo(function MCHotRecommend(props) {
  // state 和 props

  // redux hooks
  const { hotRecommend } = useSelector((state) => ({
    hotRecommend: state.getIn(['recommend', 'hotRecommend'])
  }));
  const dispatch = useDispatch();

  // other hooks
  useEffect(() => {
    dispatch(getHotRecommendAction(8));
  }, [dispatch]);

  return (
    <HotRecommmendWrapper>
      <ThemeHeaderRcm
        title="热门推荐"
        keywords={["华语", "流行", "摇滚", "民谣", "电子"]}
        moreLink="/discover/playlist"
      />
      <Content>
        {hotRecommend.map((item, index) => {
          return <MCSongsCover info={item} key={item.id} />;
        })}
      </Content>
    </HotRecommmendWrapper>
  );
});
