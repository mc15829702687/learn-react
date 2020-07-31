import React, {PureComponent} from 'react'

// 自己封装的connet函数
import {StoreContext} from '../utils/context'

export default function connect(mapStateToProps, mapDispatchToProps) {
  return function handleMapCpn(WrappedComponent) {
     class ConnectCpn extends PureComponent {
      constructor(props, context) {
        super(props)
        this.state = {
          storeState: mapStateToProps(context.getState())
        }
      }

      componentDidMount() {
        this.unsubscribe = this.context.subscribe(() => {
          this.setState({
            storeState: mapStateToProps(this.context.getState())
          })
        })
      }

      componentWillUnmount() {
        this.unsubscribe()
      }

      render() {
        return (
          <WrappedComponent {...this.props} {...mapStateToProps(this.context.getState())} {...mapDispatchToProps(this.context.dispatch)}/>
        )
      }
    }

    ConnectCpn.contextType = StoreContext
    return ConnectCpn
  }
}