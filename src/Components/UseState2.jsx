import React from 'react'
import { useState } from 'react'
const UseState2 = () => {
  var bioData = [{
    id:0,
    name:"Mudassar",
    age:24,

  },
  {
    id:1,
    name:"Ali",
    age:25,
    
  }
  ,{
    id:2,
    name:"netixsol",
    age:20,
    
  },
  {
    id:3,
    name:"fadirc",
    age:20,
    
  },
  {
    id:4,
    name:"koinzo",
    age:20,
    
  },
  {
    id:5,
    name:"nakgit",
    age:20,
    
  },
]
const [data, setData] = useState(bioData)
const clearAll = () =>{
  setData([])
}
const removeEl = (id) =>{
  const newarray =  data.filter((elements)=>{
      return(
        elements.id !== id
      )
  })
  setData(newarray)

}

  return (
    <>
    {
      data.map((elements) =>{

       return <h1 key={elements.id}>  Name : {elements.name} & Age: {elements.age} <button onClick={()=> removeEl(elements.id)}>Delete</button></h1>
      })
    }
    <button onClick={clearAll}> Clear</button>
    
    </>
  )
}

export default UseState2