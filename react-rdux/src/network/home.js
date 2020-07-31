import request from './request'

export function getMultiData() {
  const url = 'home/multidata'
  const method = 'get'
  
  return request({
    url,
    method
  })
}
