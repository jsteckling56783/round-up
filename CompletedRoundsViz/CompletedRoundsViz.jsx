import React, { Component } from 'react';

export default class CompletedRoundsViz extends Component {
  render() {
    return (
      <div className="completedroundsviz">
        { this.props.children }
      </div>
    )
  }
}
