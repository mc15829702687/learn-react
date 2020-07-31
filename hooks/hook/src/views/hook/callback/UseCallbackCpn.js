import React, { PureComponent, useState, useCallback, memo } from 'react'

/**
  *	@method: useCallback
  *	@param: fn, [a]
  * @description: useCallback实际的目的是为了进行性能的优化。
  * @return: useCallback会返回一个函数的 memoized（记忆的） 值； 
  **/
const CounterIncrement = memo((props) => {
  console.log('CounterIncrement被渲染：', props.name)
  return (
    <button type="button" onClick={props.increment}>{props.name} +1</button>
  )
})

function UseCallbackDemo() {
  const [count, setCount] = useState(0)

  const useCallbackBtn = useCallback(() => {
      setCount(count + 1)
    }, [])
  

  const useStateBtn = () => {
    setCount(count + 1)
  }

  return (
    <div>
      <h2>{count}</h2>
      <CounterIncrement increment={useCallbackBtn} name="callback"/>
      <CounterIncrement increment={useStateBtn} name="setState"/>
    </div>
  )
}

export default class useCallbackCpn extends PureComponent {
  render() {
    return (
      <div>
        <UseCallbackDemo/>
      </div>
    )
  }
}