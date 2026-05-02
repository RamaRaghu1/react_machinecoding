import { useEffect, useState } from 'react'

import './App.css'
import Circle from './Circle'

function App() {
 const [x, setX]=useState();
 const [y, setY]=useState();
 const [circle, setCircle]=useState([]);
  useEffect(() => {
    document.addEventListener("click", handleClick)
    return () => {
      document.removeEventListener("click", handleClick)
    }
  }, [])
  function getRandomRGB() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

  function handleClick(event) {
    let x=event.clientX;
    let y=event.clientY;
   let circle={x, y};
   setCircle((prev)=>{
    let oldCircle =[...prev];


    oldCircle.push(circle);
    return oldCircle;
   }
   )
    console.log("clickedddd",x,y)
  }
  return (
    <>
      <div className='circle'>
        { circle.map((item, index)=><Circle key={index} x={item.x} y={item.y}/>)}
      </div>

    </>
  )
}

export default App
