import React, { memo } from "react";

import MCTopBanners from "./c-cpns/top-banners";
import ThemeHeaderRcm from '@/components/theme-header-rcm';

import { RecommendWrapper } from "./style";

function MCRecommend(props) {
  return (
    <RecommendWrapper>
      <MCTopBanners />
      {/* <ThemeHeaderRcm title="热门推荐" keywords={['华语', '流行', '摇滚', '民谣', '电子']}/> */}
    </RecommendWrapper>
  );
}

export default memo(MCRecommend);

// function MCRecommend(props) {
//   const {getBanners, topBanners} = props
//   useEffect(() => {
//     getBanners()
//   }, [getBanners])

//   return (
//     <div>
//       MCRecommend: {topBanners.length}
//     </div>
//   )
// }

// const mapStateToProps = state => {
//   return {
//     topBanners: state.recommend.topBanners
//   }
// }

// const mapDispatchToProps = dispatch => ({
//   getBanners() {
//     return dispatch(getBannerAction())
//   }
// })

// export default connect(mapStateToProps, mapDispatchToProps)(memo(MCRecommend));
