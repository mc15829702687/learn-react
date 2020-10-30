import React, { memo } from "react";

import MCTopBanners from "./c-cpns/top-banners";
import MCHotRecommend from "./c-cpns/hot-recommend";
import MCNewAlubum from './c-cpns/new-album';
import McTopList from './c-cpns/top-list';

import { RecommendWrapper, RecommendContent, RecommendLeft, RecommendRight  } from "./style";

function MCRecommend(props) {
  return (
    <RecommendWrapper>
      <MCTopBanners />
      <RecommendContent className="wrap-v2">
        <RecommendLeft>
          <MCHotRecommend />
          <MCNewAlubum />
          <McTopList/>
        </RecommendLeft>
        <RecommendRight></RecommendRight>
      </RecommendContent>
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
