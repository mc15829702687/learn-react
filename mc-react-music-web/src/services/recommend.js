import request from "./request";

export function getBanners() {
  return request({
    url: "/banner"
  });
}

export function getHotRecommend(limit) {
  return request({
    url: "/personalized",
    params: {
      limit
    }
  });
}

export function getNewAlubum(limit) {
  return request({
    url: '/top/album',
    params: {
      limit
    }
  })
}

export function getTopList(idx) {
  return request({
    url: '/top/list',
    params: {
      idx
    }
  })
}