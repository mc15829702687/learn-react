import React, {PureComponent, createRef, forwardRef, Fragment} from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import classnames from 'classnames'

// 1. Ref转发（使用forwardRef）
const Home = forwardRef((props, ref) => {
  return (
    <div>
      <h2 ref={ref}>Home</h2>
    </div>
  )
})

// 2.Portals (渲染的内容独立于父组件甚至root)
class Modal extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    return ReactDOM.createPortal(this.props.children, document.getElementById('modal'))
  }
}

// 3. StricMode 检测内部不安全的生命周期，过时的ref API
class StricModeCpn extends PureComponent {
  UNSAFE_componentWillMount() {
    console.log('龙坑')
  }

  render() {
    return (
      <h2 ref="StricModeRef">过时ref Api</h2>
    )
  }
}

// 4. css-in-js 第三方插件库（styled-components）
const Wrapper = styled.div`
  color: #eee;

  h2 {
    color: red;
  }

  ul>li {
    color: orange;
  }
`

// 4.1 props 可穿透 和 attrs属性
const HYInput = styled.input.attrs({
  placeholder: '请填写密码',
  paddingLeft: props => props.left || '5px'
})`
  border: 1px solid red;
  padding-left: ${props => props.paddingLeft};
  color: ${props => props.color};

  &:focus {
    outline-color: orange;
  }
`

/** 
 * 4.2 style 的高级特性 
 * 
*/
// 4.2.1 样式的继承
const HYButton = styled.button`
  padding: 8px 30px;
  border-radius: 5px;
`
const HYWarnButton = styled(HYButton)`
  background-color: red;
  color: #fff;
`
const HYSuccessButton = styled(HYButton)`
  background-color:green;
  color: #fff;
`

// 4.2.2 styled设置主题，全局定制自己的主题，通过Provider进行共享
const ProfileWrapper = styled.div`
  background-color: #ddd;
  color: ${props => props.theme.color};
  font-size: ${props => props.theme.fontSize};

  &.class1 {
    text-decoration: underline;
  }
  &.class2 {
    letter-space: 5px;
  }
`

// 4.2.3 第三方库classnames决定动态添加class 

export default class ForwardRef extends PureComponent {
  constructor(props) {
    super(props)
    this.homeTitleRef = createRef()
  }

  clickInfo() {
    console.log('this.homeTitleRef', this.homeTitleRef)
  }

  // 点击普通按钮
  clickBtn() {
    alert('普通样式')
  }

  render() {
    return (
      <Fragment>
        {/* ref转发 */}
        <Home ref={this.homeTitleRef} />  
        <button type="button" onClick={e => this.clickInfo()}>打印Ref</button>
        {/* 独立于组件之外 */}
        <Modal>
          <h2>内容</h2>
        </Modal> 

        {/* 检测内部错误语法 */}
        <React.StrictMode>
          <StricModeCpn />
        </React.StrictMode>

        {/* styled-components */}
        <Wrapper>
          <h2>styled-components 样式库</h2>
          <div>普通样式</div>
          <ul>
            <li>kobe</li>
            <li>James</li>
          </ul>
        </Wrapper>

        {/* props 穿透和attrs() */}
        <HYInput color="#333" left="10px"/>

        {/* 高级特性-样式继承 */}
        <div>
          <h3>高级特性-样式继承</h3>  
          <HYButton onClick={e => this.clickBtn()}>普通样式</HYButton>
          <HYWarnButton>警告样式</HYWarnButton>
          <HYSuccessButton>普通样式</HYSuccessButton>
        </div> 

        {/* 高级特性-全局样式 */}
        <ProfileWrapper className={classnames({
          'class1': true,
          'class2': false
        })}>
          高级特性-全局样式
        </ProfileWrapper> 
      </Fragment>
    )
  }
}