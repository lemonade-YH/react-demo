import React, { Component } from 'react';
import './App.css'
import BaseNav from './components/BaseNav/BaseNav'
// import DragDemo from './components/DragDemo/DragDemo'
// import DragDrop from './components/DragDrop/DragDrop'
// import WhiteBlock from './components/WhiteBlock/WhiteBlock'

export default class App extends Component{
  constructor (props) {
    super(props)
    this.state = {
      data: [
        {
          label: '文件',
          id: 1,
          children: [
            {
              label: '新建文件',
              id: 2
            },
            {
              label: '新建窗口',
              id: 6
            }
          ]
        },
        {
          label: '编辑',
          id: 3,
          children: [
            {
              label: '撤销',
              id: 7
            },
            {
              label: '恢复',
              id: 8
            }
          ]
        },
        {
          label: '选择',
          id: 4
        },
        {
          label: '查看',
          id: 5
        }
      ],
      msg: '哈哈哈'
    }
  }

  changeMsg (val) {
    this.setState({
      msg: val
    })
    console.log(111)
  }

  render () {
    return (
      <div className="App">
        <BaseNav data={this.state.data} changeMsg={this.changeMsg.bind(this)}>
        </BaseNav>
        <p style={{ marginTop: 100 }}>{this.state.msg}</p>
        {/* <DragDemo /> */}
        {/* <DragDrop /> */}
        {/* <WhiteBlock /> */}
      </div>
    )
  }
}
