import React, { PureComponent } from 'react'

import { Link, BrowserRouter } from 'react-router-dom'
import {renderRoutes} from 'react-router-config'

export function AboutProduct(props) {
  return (
    <ul>
      <li>商品列表1</li>
      <li>商品列表2</li>
      <li>商品列表3</li>
    </ul>
  )
}

export function AboutMessage(props) {
  console.log('-----------', window.history)
  return (
    <ul>
      <li>消息列表1</li>
      <li>消息列表2</li>
      <li>消息列表3</li>
    </ul>
  )
}

export default class About extends PureComponent {
  componentDidMount() {
    console.log('about', this.props.location, this.props.route.routes)
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Link to="/about">商品</Link>
          <Link to="/about/message">消息</Link>
        </div>

        {renderRoutes(this.props.route.routes)}
        {/* <Switch>
          <Route exact path="/about" component={AboutProduct} />
          <Route path="/about/message" component={AboutMessage} />
        </Switch> */}
      </BrowserRouter>
    )
  }
}