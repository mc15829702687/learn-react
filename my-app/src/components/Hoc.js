import React, {PureComponent, createContext} from 'react'

class Demo extends PureComponent {
  render() {
    const { name, age, height } = this.props

    return (
    <div>{name}: {age}-{height}</div>
    )
  }
}

// 1. props增强
function higherCnp(WrapperCnp, otherProps) {
  class Header extends PureComponent {
    render() {
      return  <WrapperCnp name="张三" age={18} {...otherProps}/>
    }
  }
  Header.displayName = 'mc'
  return <Header/>
}

// 2. 共享组件context
const userContext = createContext({
  nickName: '李四',
  level: -1
})

function Header(props) {
  const {nickName, level, height} = props
  return (<h3>Header 昵称：{nickName} 层级：{level} 身高：{height}</h3>)
}

function Footer(props) {
  const {nickName, level} = props
  return (<h3>Footer 昵称：{nickName} 层级：{level}</h3>)
}

function withUser(WrapperCnp, otherProps) {
  return props => {
    return (
      <userContext.Consumer>
      {
        value => <WrapperCnp {...props} {...value} {...otherProps}/>
      }
      </userContext.Consumer>
    )
  }
}

const HeadUser = withUser(Header, {height: 1.88})
const FooterUser = withUser(Footer)

// 3. 用户登录校验
function Login() {
  return (<h2>Login</h2>)
}
function CartPage() {
  return (<h2>CartPage</h2>)
}

function LoginAuth(Page) {
  return props => {
    if(props.isLogin === true) {
      return <Page/>
    }
    return <Login/>
  }
}
const LoginCartPage = LoginAuth(CartPage)

// 4. 生命周期的劫持
class Home extends PureComponent {
  render() {
    return (<div style={{backgroundColor: 'red'}}>
      <h2>我是Home组件</h2>
      <h3>哈哈哈</h3>
    </div>)
  }
}

class Detail extends PureComponent {
  render() {
    return (<div style={{backgroundColor: 'blue'}}>
      <h2>我是Detail组件</h2>
      <h3>呵呵呵</h3>
    </div>)
  }
}

function LogRenderTime(WrapperCpn) {
  return class extends PureComponent {
    componentWillMount() {
      this.startTime = Date.now()
    }
    componentDidMount() {
      this.endTime = Date.now()
      const interval = this.endTime - this.startTime
      console.log(`${WrapperCpn.name}组件耗时${interval}`)
    }
    render() {
      return <WrapperCpn {...this.props}/>
    }
  }
}
const LogHome = LogRenderTime(Home)
const LogDetail = LogRenderTime(Detail)

export default class Hoc extends PureComponent{
  render() {
    return (
    <div>
      {/* props增强 */}
      {higherCnp(Demo, {height: 1.88})}

      {/* 2. 共享组件context */}
      <userContext.Provider value={{nickName: 'lisi', level: 3}}>
        <HeadUser/>
        <FooterUser/>
      </userContext.Provider>

      {/* 3. 用户登录校验 */}
      <LoginCartPage isLogin={true}/>

      {/* 4. 生命周期的劫持 */}
      <div>
        <LogHome />
        <LogDetail />
      </div>
    </div>
    )
  }
} 