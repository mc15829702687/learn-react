import React, { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getTopListAction } from "../../store/actionCreators";

import MCThemeHeaderRcm from "@/components/theme-header-rcm";
import MCTopList from "@/components/top-list";
import { TopListWrapper } from "./style";

export default memo(function McTopList(props) {
  // state and props

  // redux hooks
  const { topList } = useSelector((state) => ({
    topList: state.getIn(["recommend", "topList"]),
  }));
  const dispatch = useDispatch();

  // other hooks
  useEffect(() => {
    dispatch(getTopListAction(3));
  }, [dispatch]);

  return (
    <TopListWrapper>
      <MCThemeHeaderRcm title="榜单" moreLink="/discover/toplist" />
      <div className="content">
        <MCTopList info={topList} />
      </div>
    </TopListWrapper>
  );
});
