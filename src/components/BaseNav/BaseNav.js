import React, { Component } from 'react';
import './baseNav.scss'

function ObjFunc () {
  return (
    <h1>哈哈哈哈</h1>
  )
}

export default class baseNav extends Component {
  componentDidMount () {
    console.log(this.props.children)
  }

  heiheihei () {
    console.log(this)
  }

  handleClick (val) {
    this.props.changeMsg(val)
  }
  render () {
    // const obj = {
    //   obj: '111',
    //   cal: function () {
    //     console.log(this)
    //   }
    // }
    // obj.cal()
    // let aaa = obj.cal.bind(this)
    // aaa()
    return (
      <div className="nav-wrapper">
        <ul className="ul-list">
          {
            this.props.data.map(liItem => {
              if (liItem.children) {
                return (
                  <div key={liItem.id} className="children-wrapper">
                    <li className="children-li">{liItem.label}</li>
                    <ul className="children-ul">
                      {
                        liItem.children.map(subLi => {
                          return (
                            <li className="sub-li" key={subLi.id} onClick={this.handleClick.bind(this, subLi.label)}>{subLi.label}</li>
                          )
                        })
                      }
                    </ul>
                  </div>
                )
              } else {
                return (
                  <li className="li-item" key={liItem.id} onClick={this.handleClick.bind(this, liItem.label)}>{liItem.label}</li>
                )
              }
            })
          }
        </ul>
        <ObjFunc />
      </div>
    )
  }
}
