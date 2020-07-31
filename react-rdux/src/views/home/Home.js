import React, { PureComponent } from 'react'

import {
  addAction,
  subAction,
  getHomeMultiDataAction
} from '../../store/actionCreator'

// 自己封装的connect函数
// import connect from '../../component/common/connect'

// 使用react-redux中的connect函数
import { connect } from 'react-redux'



class Home extends PureComponent {
  constructor(props) {
    super(props)
    console.log('props', props)
  }

  componentDidMount() {
    this.props.getHomeMultiData()
  }

  // +1
  inreament() {
    this.props.addNumber(1)
  }

  // -1
  decreament() {
    this.props.subNumber(1)
  }

  render() {
    return (
      <div>
        <h2>{this.props.counter}</h2>
        <div>
          {
            this.props.banners.map((item, index) => {
              return (
              <li key={item.acm}><span>{item.image}</span></li>
              )
            })
          }
          {
            this.props.recommends.map((item, index) => {
              return (
              <li key={item.acm}><span>{item.image}</span></li>
              )
            })
          }
        </div>
        <button onClick={e => this.inreament()}>+1</button>
        <button onClick={e => this.decreament()}>-1</button>
      </div>
    )
  }
}

// 单一状态树
const mapStateToProps = state => {
  return {
    counter: state.counter,
    banners: state.banners,
    recommends: state.recommends
  }
}

// action
const mapDispatchToProps = dispatch => {
  return {
    addNumber(number) {
      dispatch(addAction(number));
    },
    subNumber(number) {
      dispatch(subAction(number))
    },
    getHomeMultiData() {
      dispatch(getHomeMultiDataAction())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)