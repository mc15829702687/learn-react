export function getSizeImage(url, size) {
  return `${url}?param=${size}y${size}`
}

export function getPlayUrl(id) {
  return `https://music.163.com/song/media/outer/url?id=${id}.mp3`
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

export function padLeftZero(str) {
  return ('00' + str).substr(str.length)
}

export function formatDate(time, fmt) {
  const date = new Date(time);
  
  // yyyy:mm:ss
  if(/y+/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }

  const o = {
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    'M+': date.getMonth() + 1,
    'D+': date.getDay(),
    's+': date.getSeconds()
  }

  for(let k in o) {
    if(new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + '';
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
    }
  }
  return fmt;
}

export function formatMonthDay(time) {
  return formatDate(time, 'MM月DD日');
}

export function formatMinuteSecond(time) {
  return formatDate(time, 'mm:ss');
}