import React from "react";
import { NavLink } from "react-router-dom";

import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

import { headerLinks } from "services/local-data";
import { AppHeaderWrapper, HeaderLeft, HeaderRight } from "./style";

export default function AppHeader() {
  const showItem = (item, index) => {
    if (index < 3) {
      return (
        <NavLink to={item.link}>
          {item.title}
          <i className="icon sprite_01 "></i>
        </NavLink>
      );
    }
    return <a href={item.link} target="_blank" rel="noopener noreferrer">{item.title}</a>;
  };

  return (
    <AppHeaderWrapper>
      <div className="wrap-v1 content">
        <HeaderLeft>
          <h1 className="logo sprite_01">
            <a href="/">网易云音乐</a>
          </h1>
          <ul className="select-list">
            {headerLinks.map((item, index) => {
              return (
                <li className="select-item" key={item.title}>
                  {showItem(item, index)}
                </li>
              );
            })}
          </ul>
        </HeaderLeft>
        <HeaderRight>
          <Input placeholder="音乐/视频/电台/用户" prefix={<SearchOutlined />} className="search"/>
          <div className="center">创作者中心</div>
          <div className="login">登录</div>
        </HeaderRight>
      </div>
      <div className="divider"></div>
    </AppHeaderWrapper>
  );
}
