import React, { PureComponent } from 'react'

import { Redirect } from 'react-router-dom'

export default class extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      isLogin: true
    }
  }

  render() {
    return this.state.isLogin ? (
      <div>
        <div>姓名： mc</div>
      </div>
    ) : <Redirect to="/about"/>
  }
}