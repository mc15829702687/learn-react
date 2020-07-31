import React, {PureComponent} from 'react'

export default class extends PureComponent{
  componentDidMount() {
    console.log('profile', this.props.location.search)
  }

  render() {
    return (
      <h3>Profile</h3>
    )
  }
}