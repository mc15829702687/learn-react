import React, {PureComponent, useRef, forwardRef, useImperativeHandle} from 'react'

// ref转发到子组件
const HYInput = forwardRef((props, ref) => {
  console.log('props', props)
  console.log('ref', ref)

  // 创建组件内部的ref
  const inputRef = useRef()

  // 自定义暴露给父组件的实例值，第二个参数返回的是ref
  useImperativeHandle(ref, () => ({
    focus() {
      inputRef.current.focus()
    },
    printHello() {
      console.log('printHello')
    }
  }))

  // 绑定组件内部的ref值
  return (
    <input ref={inputRef} type="text"/>
  )
})

function ForWardDemo() {
  const inputRef = useRef()
  console.log('--------', inputRef)

  const btnFocus = () => {
    inputRef.current.focus()
  }

  return (
    <div>
      <HYInput ref={inputRef}/>
      <button type="button" onClick={btnFocus}>聚焦</button>
      <button type="button" onClick={e => inputRef.current.printHello()}>print Hellow</button>
    </div>
  ) 
}

function UseImperativeHandleDemo() {
  return (
    <div>
      <ForWardDemo/>
    </div>
  )
}

export default class UseImperativeHandleCpn extends PureComponent{
  render() {
    return (
      <div><UseImperativeHandleDemo/></div>
    )
  }
}