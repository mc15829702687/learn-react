import React, { PureComponent, useState, useMemo, memo } from 'react'

/**
  *	@method: useMemo
  *	@param: fn, [a]
  * @description: 性能优化
  * @return: useMemo返回的也是一个 memoized（记忆的） 值
  **/

function calcTotal(count) {
  let total = 0

  for (let i = 1; i <= count; i++) {
    total += i
  }
  console.log(`total: ${total}`)
  return total
}

const ShowTotal = memo((props) => {
  console.log('重新渲染')
  return (
    <h2>ShowTotal: {props.total}</h2>
  )
})

const ShowInfo = memo((props) => {
  console.log('ShowInfo重新渲染')
  return (
    <h2>ShowInfo: {props.info.name}</h2>
  )
})

function MemoHookDemo() {
  const [count, setCount] = useState(0)
  const [isLogin, setIsLogin] = useState(true)

  const total = useMemo(() => {
    return calcTotal(count)
  }, [count])

  // 对象每次比较的是指针, 所以都会重新渲染
  const info = useMemo(() => {
    return {name: '傻乎乎'}
  }, [])

  return (
    <div>
      <h2>{total}</h2>
      <ShowTotal total={total}/>
      <ShowInfo info={info}/>
      <button type="button" onClick={e => setCount(count + 1)}>+1</button>
      {isLogin && <h2>登录</h2>}
      <button type="button" onClick={e => setIsLogin(!isLogin)}>切换</button>
    </div>
  )
}

export default class UseMemo extends PureComponent {

  render() {
    return (
      <div>
        <MemoHookDemo />
      </div>
    )
  }
}