import React from 'react'
import { InputNumber } from 'antd'

type Props = {
  min: number,
  max: number,
  defaultValue: number
}

export default function BaseInputNumber (props: Props) {

  function handleChange (val: string | number | undefined) {
    console.log('changed', val)
  }

  return (
    <InputNumber
      min={props.min}
      max={props.max}
      defaultValue={props.defaultValue}
      onChange={handleChange} />
  )
}
