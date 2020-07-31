import React, {PureComponent} from 'react'

export default class extends PureComponent{
  componentDidMount() {
    console.log('home', this.props.match.params.id)
  }
  
  render() {
    return (
      <h3>Home</h3>
    )
  }
}