import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { getTopListAction } from "../../store/actionCreators";

import MCThemeHeaderRcm from "@/components/theme-header-rcm";
import MCTopList from "@/components/top-list";
import { TopListWrapper } from "./style";

export default memo(function McTopList(props) {
  // state and props

  // redux hooks
  const { topUpList, topNewList, topOriginList } = useSelector((state) => ({
    topUpList: state.getIn(["recommend", "topUpList"]),
    topNewList: state.getIn(["recommend", "topNewList"]),
    topOriginList: state.getIn(["recommend", "topOriginList"]),
  }), shallowEqual);
  const dispatch = useDispatch();

  // other hooks
  useEffect(() => {
    dispatch(getTopListAction(3));
    dispatch(getTopListAction(0));
    dispatch(getTopListAction(2));
  }, [dispatch]);

  return (
    <TopListWrapper>
      <MCThemeHeaderRcm title="榜单" moreLink="/discover/toplist" />
      <div className="tops">
        <MCTopList info={topUpList} />
        <MCTopList info={topNewList} />
        <MCTopList info={topOriginList} />
      </div>
    </TopListWrapper>
  );
});
