import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [input, setInput]=useState("")
  const [data, setData] = useState([])
  const [visible, setVisible]=useState(false)
  const [cache, setCache]=useState({})
  const fetchData = async () => {

    if(cache[input]){
      console.log("cache return")
      setData(cache[input])
      return;
    }
    console.log("calledd", input)
    const res = await fetch(`https://dummyjson.com/recipes/search?q=${input}`)
    const data = await res.json();
    setData(data?.recipes)
    setCache((prev)=>({...prev, [input]:data?.recipes}))
  }
console.log("data",cache)
useEffect(()=>{
   const timer = setTimeout(fetchData,300);
 
  return ()=>{
    clearTimeout(timer)
  }
},[input])
  return (
    <>
      <h1>Autocomplete Searchbar</h1>
      <div>
        <input type="text" className='search' onChange={(e)=>setInput(e.target.value)} onFocus={()=>setVisible(true)} onBlur={()=>setVisible(false)}/>
      </div>
      {visible && <div className='result-container'>
        {data?.map((item)=><span className='result' key={item?.id}>{item?.name}</span>)}
      </div> }
    </>
  )
}

export default App
