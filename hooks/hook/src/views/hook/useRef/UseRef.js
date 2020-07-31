import React, {PureComponent, useRef, useState, useEffect} from 'react'

/**
  *	@method: useRef
  *	@param: none
  * @description: useRef返回一个ref对象，返回的ref对象在组件的整个生命周期保持不变。
  * @return: useRef返回一个ref对象
  **/

// 1. 引用DOM
function DomRef() {
  const inputRef = useRef()
  const titleRef = useRef()

  const handleReport = () => {
    titleRef.current.innerHTML = 'mc'
    inputRef.current.focus()
  }

  return (
    <div>
      <input type="text" ref={inputRef}/>
      <h2 ref={titleRef}>Hellow useRef</h2>

      <button onClick={e => handleReport()}>操作</button>
    </div>
  )
}

// 2. 使用ref保存上一次的某个值
function Count() {
  const [count, setCount] = useState(0)
  const countRef = useRef()

  useEffect(() => {
    countRef.current = count
  }, [count])

  return (
    <div>
      <h2>前一次的值：{countRef.current}</h2>
      <h2>这一次的值：{count}</h2>

      <button onClick={e => setCount(count + 1)}>+1</button>
    </div>
  )
}

export default class UseRefCpn extends PureComponent{

  render() {
    return (
      <div>
        <DomRef/>
        <Count />
      </div>
    )
  }
}