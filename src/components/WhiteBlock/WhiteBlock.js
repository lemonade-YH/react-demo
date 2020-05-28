import React, { useState, useEffect } from 'react'
import './WhiteBlock.scss'

export default function WhiteBlock () {
  const [num, setNum] = useState(1)

  useEffect(() => {
    setNum(num + 1)
  }, [])

  return (
    <div>
      {num}
    </div>
  )
}