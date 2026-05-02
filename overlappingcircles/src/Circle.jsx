import React from 'react'

const Circle = ({x,y}) => {
  return (
    <div className="circle-comp" style={{left:`${x}px`, top:`${y}px`, transform:"translate(-50px, -50px)"}}>
    </div>
  )
}

export default Circle
