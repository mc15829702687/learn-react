export function getSizeImage(url, size) {
  return `${url}?param=${size}y${size}`
}

export function getCount(count) {
  if(count < 0) return;

  if(count > 10000) {
    return Math.floor(count/1000) / 10 + '万';
  }

  if(count > 100000000) {
    return Math.floor(count/10000000) / 10 + '亿';
  }
}