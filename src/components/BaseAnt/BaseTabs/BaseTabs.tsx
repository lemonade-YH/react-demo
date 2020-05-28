import React from 'react'
import { Tabs } from 'antd'

const { TabPane } = Tabs
type Props = {
  tabList: Array<any>
}

export default function BaseTabs (props: Props) {

  function callback (key: string) {
    console.log(key)
  }

  return (
    <Tabs defaultActiveKey="1" onChange={callback}>
      {
        props.tabList.map(tabItem => {
          return (
            <TabPane tab={tabItem.tabLabel} key={tabItem.id}>
              {tabItem.content}
            </TabPane>
          )
        })
      }
    </Tabs>
  )
}