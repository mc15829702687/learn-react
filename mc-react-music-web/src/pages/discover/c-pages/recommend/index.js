import React, { memo, useEffect } from 'react';
import { connect } from "react-redux";

import { getBannerAction } from '@/pages/discover/c-pages/recommend/store/actionCreators';


function MCRecommend(props) {
  const {getBanners, banners} = props
  useEffect(() => {
    getBanners()
  }, [getBanners])

  return (
    <div>
      MCRecommend: {banners.length}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    banners: state.banners
  }
}

const mapDispatchToProps = dispatch => ({
  getBanners() {
    return dispatch(getBannerAction())
  }
})


export default connect(mapStateToProps, mapDispatchToProps)(memo(MCRecommend));
