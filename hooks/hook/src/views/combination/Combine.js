import React, {PureComponent} from 'react'

// 1. 默认插槽
function CombineChildCpn(props) {
  return (
    <div className="box">
      {props.children}

      <div className="left-box">{props.left}</div>
    </div>
  )
}

// 2. 具名插槽
function LeftCpn() {
  return (
    <div>
      <h2>左侧列表树</h2>
      <ul>
        {
          [1, 2, 3].map(item => {
            return (
            <li key={item.toString()}>{item}</li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default class Combine extends PureComponent{

  render() {
    return (
      <div>
        <CombineChildCpn left={<LeftCpn/>}>
          <h2>标题1</h2>
          <p>内容1</p>
          <input aria-label="111" aria-required={true}/>
        </CombineChildCpn>
      </div>
    )
  }
}