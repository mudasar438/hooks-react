import React from 'react'
import { useState } from 'react';
// 1 example of useState hooks 
const MyState = () => {
  
const [firstName, setFirstName] = useState("Mudassar Iqbal")

    const changeName = ()=>{
      if(firstName == "Mudassar Iqbal"){

        setFirstName("Netixsol")
      }else{
        setFirstName("Mudassar Iqbal")
      }
        
          

    }
  return (
    <>
    <h1>{firstName}</h1>
    <button onClick={changeName}>click me</button>
 
    
    </>
  )
}

export default MyState;