
import './App.css'
import List from './List'
import { useState } from 'react'
import Json from "./data.json"


function App() {
 const [data, setData] = useState(Json)



  return (
    <>
      <div className='App'>
        <h1>File Explorer</h1>
       <List list={data}/>
      </div>
    </>
  )
}

export default App
