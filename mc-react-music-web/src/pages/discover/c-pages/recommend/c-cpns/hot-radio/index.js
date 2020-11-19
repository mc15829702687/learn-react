import React, { memo } from "react";

import { getSizeImage } from "@/utils/format-utils";
import { hotRadios } from "@/services/local-data";

import MCThemeHeaderSmall from "@/components/theme-header-small";
import { HotRadioWrapper } from "./style";

export default memo(function MCHotRadio() {
  return (
    <HotRadioWrapper>
      <MCThemeHeaderSmall title="热门主播" />
      <div className="hot-radio-list">
        {hotRadios.map((item, index) => {
          return (
            <div className="item" key={item.name}>
              <a href="/abc">
                <img
                  src={getSizeImage(item.picUrl, 40)}
                  alt={item.name}
                  className="img"
                />
              </a>
              <div className="info">
                <div className="name">{item.name}</div>
                <div className="title text-nowrap">{item.position}</div>
              </div>
            </div>
          );
        })}
      </div>
    </HotRadioWrapper>
  );
});
