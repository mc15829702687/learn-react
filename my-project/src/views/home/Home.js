import React, {PureComponent} from 'react'

import store from '../../store/index'
import {
  addAction,
  subAction
} from '../../store/actionCreator'
import connect from '../../component/common/connect'


class Home extends PureComponent{
  constructor(props) {
    super(props)
    console.log('props', this.props)
  }

  // +1
  inreament() {
    this.props.addNumber(1)
  }

  // +5
  decreament() {
    this.props.subNumber(1)
  }

  render() {
    return (
      <div>
        <h2>{this.props.counter}</h2>
        <button onClick={e => this.inreament()}>+1</button>
        <button onClick={e => this.decreament()}>-1</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    counter: state.counter
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addNumber: function(number) {
      dispatch(addAction(number));
    },
    subNumber(number) {
      dispatch(subAction(number))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)