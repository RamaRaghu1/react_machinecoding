import { useState } from "react"



function List({list}) {
const [isExpanded, setIsExpanded]=useState({});


console.log("isssss", isExpanded)
  return (
    <>
    
        <div >
          {list?.map((item, index) =>
            <div className='container' key={index}>
              {item?.isFolder && <span className="expand-btn" onClick={()=>setIsExpanded((prev)=>({...prev, [item?.name]:!prev[item.name]}))}>{isExpanded?.[item.name] ? "-" : "+"}</span>}<span>{item?.isFolder ? "📂": "📄"}{item.name}</span>
              {isExpanded?.[item.name] && item?.children && <List list={item?.children}/> }
            </div>
          )}
        </div>
     
    </>
  )
}

export default List
