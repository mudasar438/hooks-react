import React from 'react'
import { useState } from 'react'
//Example 3 useState
const UseState3 = () => {
    var arryobj = [
        {
            name:"Mudassaar",
            age:25,
            rollNo:180145,
    
        },{
            name:"Hamza",
            age:35,
            rollNo:180115,
    
        },
        
    ]
    const [myobj, setMyObj] = useState(arryobj)
    const update = () =>{

        setMyObj([{...myobj[1], name:"Ali"}])
       

    }
  return (
    <div>
        {/* <h1> Name:{myobj.name} Age:{myobj.age} RollNo:{myobj.rollNo}</h1> */}
       { myobj.map((element, idx) =>{
           return <h1 key={idx}> Name:{element.name} age:{element.age}</h1>

        })}
        
        <button onClick={update}>Update</button></div>
  )
}

export default UseState3