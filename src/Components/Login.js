import React from 'react'
import { useState } from 'react'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] =useState('')
    const [allentery, setAllEntery] =useState([])

    const fomsubmited = (e) => {
        e.preventDefault();
        const newentery = { email:email, passwod:password }
        console.log(newentery)
      setAllEntery(
        [...allentery.push(newentery) ]
    )
        console.log(allentery);

    }
    

  return (
    <div>
            <form onSubmit={fomsubmited}>
            <div className="">

            <label htmlFor="email">Email</label>
            <input type="text" name='email' placeholder='Enter email' value={email} onChange={(event)=> setEmail(event.target.value)} />
            </div>
            <div className="">

            <label htmlFor="password">Password</label>
            <input type="text" name='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type='submit'>Login</button>
         </form>
            
            {/* <div className="">
            {(allentery.length != 0) && 
    allentery.map((person) =>{
        return(
            <h1>  {person.email} {person.password} </h1>
        )
    })
}
            </div> */}


    </div>
  )
}

export default Login