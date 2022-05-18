import React, { createContext } from 'react'
import UseContext2 from './UseContext2'
const propsWcontextApi =  createContext();



const UseContext = () => {
  return (


    <div>UseContext1
        <propsWcontextApi.Provider value={[1,10,12,15,986586265622]} >

        <UseContext2></UseContext2>
        </propsWcontextApi.Provider>

    </div>
  )
}

export default UseContext
export {propsWcontextApi}