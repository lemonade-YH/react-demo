import React, { Component } from 'react'
import './dragDemo.scss'
import { Rnd } from 'react-rnd'

export default class Drag extends Component {
  // constructor (props) {
  //   super(props)
  // }

  render () {
    return (
      <div className="big-box">
        <Rnd
          default={{
            x: 50,
            y: 50,
            width: 100,
            height: 100
          }}
          minWidth={0}
          minHeight={0}
          maxWidth={500}
          maxHeight={500}
          bounds=".big-box"
        >
          <div className="small-box">
            {this.props.children}
          </div>
        </Rnd>
      </div>
    )
  }
}