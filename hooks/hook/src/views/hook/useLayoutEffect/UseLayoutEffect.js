import React, { PureComponent, useState, useEffect, useLayoutEffect } from 'react'

/**
  *	@method: UseLayoutEffectCpn
  *	@param: fn, [a]
  * @description: Dom更新前执行的一些操作
  * @return: void 
  **/
function UseEffectCpn() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (count === 0) {
      setCount(Math.random() * 200)
    }
  }, [count])
  
  return (
    <div>
      <h2>执行前：{count}</h2>
      <button onClick={e => setCount(0)}>随机数</button>
    </div>
  )
}

function UseLayoutEffectDemo() {
  const [count, setCount] = useState(0)

  useLayoutEffect(() => {
    if (count === 0) {
      setCount(Math.random() * 200)
    }
  }, [count])

  return (
    <div>
      <h2>执行前：{count}</h2>
      <button onClick={e => setCount(0)}>随机数</button>
    </div>
  )
}

export default class UseLayoutEffectCpn extends PureComponent {
  render() {
    return (
      <div>
        <UseEffectCpn />
        <UseLayoutEffectDemo />
      </div>
    )
  }
}