import React, { PureComponent, useEffect, useState } from 'react'
import { UserContext, ThemeContext } from '../../../App'

// 引用自定义hook
import { useLoggingLife, useUserToken, useCustomScrollPosition, useCustomDataStoreHook } from '../../../common/util'

function Home() {
  useLoggingLife('Home')
  const [user, token] = useUserToken(UserContext, ThemeContext)

  console.log(user, token)
  return (
    <div>Home</div>
  )
}

function Profle() {
  useLoggingLife('Profle')
  return (
    <div>Profle</div>
  )
}

// 获取窗口滚动的位置
function CustomScrollPositionHook() {
  const [positionScroll, setPosition] = useState(0)

  useCustomScrollPosition(positionScroll, setPosition)
  
  return (
    <div style={{ padding: '1000px' }}>
      <h2 style={{ position: "fixed", top: 0, left: 0 }}>CustomScrollPositionHook:{ positionScroll }</h2>
    </div>
  )
}

// 数据存储的SessionStorage
function CustomDataStoreHook() {
  const [name, setName] = useCustomDataStoreHook()
  
  return (
    <div>
      <h2>CustomDataStoreHook: {name}</h2>
      <button onClick={e => setName('mc')}>设置name</button>
    </div>
  )
}

export default class CustumHookCpn extends PureComponent {

  render() {
    return (
      <div>
        <Home />
        <Profle />
        {/* <CustomScrollPositionHook /> */}
        <CustomDataStoreHook/>
      </div>
    )
  }
}