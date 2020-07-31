import React, { PureComponent } from 'react'
import './App.css'

import { BrowserRouter, NavLink, withRouter } from 'react-router-dom'
import routes from './router/index'
import {renderRoutes} from 'react-router-config'

class App extends PureComponent {
  toAbout() {
    console.log('----------', this.props.history)
    this.props.history.push("/profile")
    this.props.history.go()
  }
  render() {
    return (
      <BrowserRouter>
        <NavLink to="/" exact activeClassName="router-link">登录</NavLink>
        <NavLink to="/home/123" exact activeClassName="router-link">首页</NavLink>
        <NavLink to={
          {
            pathname: '/about',
            query: {
              aa: 'bbb'
            },
            state: 122
          }
        } activeClassName="router-link">关于</NavLink>
        <NavLink to="/profile?name=mc&age=18" activeClassName="router-link">我的</NavLink>

        <button onClick={e => this.toAbout()}>跳转关于页面</button>

        {/* Switch 匹配到第一个，后面都不会匹配上 */}
        {renderRoutes(routes)}
        {/* <Switch>
          <Login path="/" exact component={Login} />
          <Route path="/home/:id" component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/profile" exact component={Profile} />
        </Switch> */}
      </BrowserRouter>
    );
  }
}

export default withRouter(App);
