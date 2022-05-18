import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const UseEffect1 = () => {
    const [mumber , setNumber] =useState(0);

    useEffect(() =>{
        if(mumber >= 1){

            document.title = `Netixsol (${mumber})`;
            console.log("Netixsol")
        }
        
       
        else{
            document.title = `Netixsol`
        }
       
    });

  return (
    <>
    <h1>{mumber}</h1>

    <button onClick={()=> setNumber(mumber + 1)}>Click me</button>
    </>
  )
}

export default UseEffect1