import React, { memo } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { ThemeHeaderRcmWrapper } from "./style";

function ThemeHeaderRcm(props) {
  const { title, keywords, moreLink } = props;

  return (
    <ThemeHeaderRcmWrapper className="sprite_02">
      <div className="left">
        <h3 className="title">{title}</h3>
        <div className="keywords">
          {keywords.map((item) => {
            return (
              <div className="keyword" key={item}>
                <span>{item}</span>
                <span className="divider">|</span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="right">
        <Link to={moreLink}>更多</Link>
        <i className="icon sprite_02"></i>
      </div>
    </ThemeHeaderRcmWrapper>
  );
}
// propTypes静态类型检测
ThemeHeaderRcm.propTypes = {
  title: PropTypes.string.isRequired,
  keywords: PropTypes.array,
  moreLink: PropTypes.string
};
ThemeHeaderRcm.defaultProps = {
  keywords: [],
  moreLink: '#/todo'
};

export default memo(ThemeHeaderRcm);
