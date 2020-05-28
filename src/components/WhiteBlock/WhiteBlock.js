import React, { useState, useEffect } from 'react'
import './WhiteBlock.scss'
import BaseTabs from '../BaseAnt/BaseTabs/BaseTabs.tsx'

export default function WhiteBlock () {
  const [num, setNum] = useState(1)
  const [tabList] = useState([
    {
      tabLabel: '外观',
      id: 1,
      content: '我是外观啊'
    },
    {
      tabLabel: '事件',
      id: 2,
      content: '我是事件啊'
    },
    {
      tabLabel: '数据',
      id: 3,
      content: '我是数据啊'
    },
    {
      tabLabel: '交互',
      id: 4,
      content: '我是交互啊'
    }
  ])

  function addNum () {
    setNum(num + 1)
  }

  useEffect(() => {
    addNum()
  },[])// eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <h1>{num}</h1>
      <div className="block"></div>
      <BaseTabs tabList={tabList} />
    </div>
  )
}