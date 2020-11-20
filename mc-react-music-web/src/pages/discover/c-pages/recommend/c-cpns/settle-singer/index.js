import React, { memo, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { getSettleSinger } from "../../store/actionCreators";

import { getSizeImage } from "@/utils/format-utils";

import MCThemeHeaderSmall from "@/components/theme-header-small";
import { SettleSingerWrapper } from "./style";

export default memo(function MCSettleSinger() {
  // state and props

  // redux hooks
  const { settleSingerList } = useSelector(
    (state) => ({
      settleSingerList: state.getIn(["recommend", "settleSingerList"]),
    }),
    shallowEqual
  );
  const dispatch = useDispatch();

  // other hooks
  useEffect(() => {
    dispatch(getSettleSinger());
  }, [dispatch]);

  return (
    <SettleSingerWrapper>
      <MCThemeHeaderSmall title="入驻歌手" more="查看全部>" />
      <div className="singer-list">
        {settleSingerList.map((item, index) => {
          return (
            <a href="/singer" key={item.id} className="item">
              <img src={getSizeImage(item.picUrl, 62)} alt={item.name} className="img"/>
              <div className="info">
                <div className="title">{item.name}</div>
                <div className="name">{item.name}</div>
              </div>
            </a>
          );
        })}
      </div>
      <div className="apply-for">
        <a href="/abc">申请成为网易音乐人</a>
      </div>
    </SettleSingerWrapper>
  );
});
