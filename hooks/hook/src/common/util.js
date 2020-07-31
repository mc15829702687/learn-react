import {useEffect, useContext, useState} from 'react'



export function useLoggingLife(name) {
  useEffect(() => {
    console.log(`${name}组件被创建`)

    return () => {
      console.log(`${name}Home组件被销毁`)
    }
  }, [])
}

export function useUserToken(UserContext, ThemeContext) {
  const user = useContext(UserContext)
  const token = useContext(ThemeContext)

  return [user, token]
}

// 获取窗口滚动的位置
export function useCustomScrollPosition(positionScroll, setPosition) {
  useEffect(() => {
    const handleScroll = () => {
      setPosition(window.scrollY)
    }
    document.addEventListener('scroll', handleScroll)
    return () => {
      document.removeListener('scroll', handleScroll)
    }
  }, [])

  return positionScroll
}

// 设置sessionStorage
export function useCustomDataStoreHook() {
  const [name, setName] = useState(() => {
    return  JSON.parse(window.sessionStorage.getItem('name'))
  })

  useEffect(() => {
    window.sessionStorage.setItem('name', JSON.stringify(name))
    return () => {
      window.sessionStorage.removeItem('name', name)
    }
  }, [name])

  return [name, setName]
}