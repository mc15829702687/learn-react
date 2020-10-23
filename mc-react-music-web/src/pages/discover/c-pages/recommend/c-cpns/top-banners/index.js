import React, { memo, useEffect, useRef, useState, useCallback } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { getBannerAction } from "@/pages/discover/c-pages/recommend/store/actionCreators";

import { Carousel } from "antd";

import {
  BannersWrapper,
  BannersLeft,
  BannersRight,
  BannersControl,
} from "./style";

export default memo(function MCTopBanners() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // reduxHook 的逻辑代码
  const { banners } = useSelector(
    (state) => ({ banners: state.getIn(["recommend", "topBanners"]) }),
    shallowEqual
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBannerAction());
  }, [dispatch]);

  // 其他hook代码
  const bannerRef = useRef();

  // 其他逻辑代码
  const bannerChange = useCallback((from, to) => {
    setCurrentIndex(to);
  }, []);
  const bgImage =
    banners[currentIndex] &&
    banners[currentIndex].imageUrl + "?imageView&blur=40x20";

  return (
    <BannersWrapper bgImage={bgImage}>
      <div className="wrap-v2 banner">
        <BannersLeft>
          <Carousel
            effect="fade"
            autoplay
            ref={bannerRef}
            beforeChange={bannerChange}
          >
            {banners.map((item, index) => {
              return (
                <div key={item.scm} className="image-item">
                  <img src={item.imageUrl} alt={item.typeTitle} />
                </div>
              );
            })}
          </Carousel>
        </BannersLeft>
        <BannersRight></BannersRight>
        <BannersControl>
          <button
            className="btn left"
            onClick={(e) => bannerRef.current.prev()}
          ></button>
          <button
            className="btn right"
            onClick={(e) => bannerRef.current.next()}
          ></button>
        </BannersControl>
      </div>
    </BannersWrapper>
  );
});
