import React, { useContext } from 'react'
import {propsWcontextApi} from './UseContext'


const UseContext3 = () => {
const {first} = useContext(propsWcontextApi)
console.log(first)
  return (
    <div>
    {first}
    
    </div>
    
  )
}

export default UseContext3