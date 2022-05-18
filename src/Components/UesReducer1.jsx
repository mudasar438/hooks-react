import React from 'react'
import { useReducer } from 'react';

const UesReducer1 = () => {
    const reducer= (state, action)=>{
        console.log(state, action)
        if(action.type === "INCREMENT"){
           return  state + 1;
        }
        if(action.type === "DECREMENT"){
          return   state - 1;
        }
    
    }
const initialstate = 0;

    const [state, dispatch]= useReducer(reducer, initialstate)
  return (
    <>
    <h1>{state}</h1>
    <button onClick={()=> dispatch({type:"INCREMENT"})}>INCREMENT</button>
    <button onClick={()=> dispatch({type:"DECREMENT"})}>DECREMENT</button>
    </>
  )
}

export default UesReducer1;