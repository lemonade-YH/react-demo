import React, { useState } from 'react'
import { Slider, InputNumber, Row, Col } from 'antd'

export default function BaseSlider () {

  const [num, setNum] = useState(0)

  function handleChange (value: any) {
    setNum(value)
  }

  return (
    <Row>
      <Col span={12}>
        <Slider
          min={0}
          max={100}
          onChange={handleChange}
          value={num}
        />
      </Col>
      <Col span={4}>
        <InputNumber
          min={0}
          max={100}
          style={{ margin: '0 16px' }}
          value={num}
          onChange={handleChange}
        />
      </Col>
    </Row>
  )
}