import React, { Component } from 'react';
import DragDemo from '../DragDemo/DragDemo'
import './DragDrop.scss';

export default class AppDragDropDemo extends Component {
    constructor (props) {
      super(props)
      this.state = {
        tasks: [
          {name:"Learn Angular",category:"wip", bgcolor: "yellow"},
          {name:"React", category:"wip", bgcolor:"pink"},
          {name:"Vue", category:"wip", bgcolor:"skyblue"}
        ],
        kLeft: 0,
        flag: 0
      }
    }

    onDragStart = (ev, id) => {
      ev.dataTransfer.setData("id", id)
    }

    onDragOver = (ev) => {
      ev.preventDefault()
    }

    onDrop = (ev, cat) => {
      ev.persist()
      // 这里可以访问到该元素当鼠标松开时的坐标
      console.log(ev)
      let id = ev.dataTransfer.getData("id");
      let tasks = this.state.tasks.filter((task) => {
        if (task.name === id) {
            task.category = cat
        }
        return task
      });

      this.setState({
        ...this.state,
        tasks
      })
    }

    // handleMouseDown (e) {
    //   let line = this.refs.line
    //   let distance = 0
    //   this.setState({
    //     flag: 1
    //   })
    //   e.persist()
    //   e = e || window.event
    //   distance = e.clientX
    //   const that = this
    //   line.onmousemove = function (e) {
    //     if (that.state.flag === 1) {
    //       e = e || window.event
    //       console.log(e)
    //     }
    //   }
    // }

    render() {
      let tasks = {
        wip: [],
        complete: []
      }
      this.state.tasks.forEach ((t) => {
        tasks[t.category].push(
          <div key={t.name} 
            onDragStart = {(e) => this.onDragStart(e, t.name)}
            draggable={t.category === 'wip' ? true : false}
            className={`${t.category}-item`}
            style = {{backgroundColor: t.bgcolor}}
          >
          </div>
        )
      })
      return (
        <div className="container-drag">
          <div className="wip"
            onDragOver={(e)=>this.onDragOver(e)}
            onDrop={(e)=>{this.onDrop(e, "wip")}}>
            <span className="task-header">WIP</span>
            {tasks.wip}
          </div>
          <div className="line"></div>
          <div className="droppable" 
            onDragOver={(e)=>this.onDragOver(e)}
            onDrop={(e)=>this.onDrop(e, "complete")}
          >
            <span className="task-header">COMPLETED</span>
            <DragDemo>
              <div className="drop-item">
                {tasks.complete}
              </div>
            </DragDemo>
          </div>
        </div>
      )
    }
}