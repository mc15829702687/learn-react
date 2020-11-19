import React, { memo } from "react";
import PropTypes from 'prop-types';

import { ThemeHeaderSmallWrapper } from "./style";

function MCThemeHeaderSmall(props) {
  const { title, more } = props;

  return (
    <ThemeHeaderSmallWrapper>
      <h3 className="title">{title}</h3>
      <a href="/todo">{more}</a>
    </ThemeHeaderSmallWrapper>
  );
};

MCThemeHeaderSmall.propTypes = {
  title: PropTypes.string.isRequired,
  more: PropTypes.string
}


export default memo(MCThemeHeaderSmall)

