import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'


const UseEffect2 = () => {
    const [mywind ,  setMyWind] = useState(window.screen.width)
    const [mywindwidth, setMyWindWidth] = useState(window.screen.height)


    const myActualWind = ()=>{
        console.log(window.innerWidth)

        setMyWind(window.innerWidth)
      
     

    }
    useEffect(() =>{
        window.addEventListener("resize" , myActualWind)
    
       
        return () => {
            window.removeEventListener("resize", myActualWind)
           
        }

    })
  return (
    <>
    <p>This is the Actual Windows Size</p>
    <h1>Width: {mywind}</h1>
    <h1>Hight:{mywindwidth} </h1>

    
    </>
  )
}

export default UseEffect2