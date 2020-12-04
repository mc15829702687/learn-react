import request from './request';

export function getLyric(id) {
  return request({
    url: "/lyric",
    params: {
      id
    }
  })
}