import React, { Component } from 'react'

export default class PageContent extends Component {
  render() {
      const childern = React.Children.toArray(this.props.children);
    return (
      <div>
        <div style={{textAlign: "center"}}>{childern[0]}</div>
        <div>{childern.slice(1)}</div>
      </div>
    )
  }
}
