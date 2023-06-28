import React, { useState } from 'react'
import './Login.css'
import firebase from '../../firebase/config'


function Login() {
    const[password,setPassword]=useState("")
     const[email,setEmail]=useState("")

   
    const handleLogin=(e)=>{
        e.preventDefault()
        firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
            alert("Lodded In")
        }).catch((error)=>{
            alert(error.massage)
        })
    }
  return (
    <div>
        <form onSubmit={handleLogin} action="submit" className='loginForm'>
            <div class="in1">
                <input onChange={(e)=>setEmail(e.target.value)} type="text" id="inp1" required/>
                <label for="inp1">Email</label>
                <ion-icon name="mail-outline"></ion-icon>
            </div>
            <div class="in2">
                <input onChange={(e)=>setPassword(e.target.value)} type="password" id="inp2" required/>
                <label for="inp2">Password</label>
                <ion-icon name="lock-closed-outline"></ion-icon>
            </div>
            {/* <div class="checkk">
                <div class="in3">
                    <input type="checkbox" id="inp3" required/>
                    <label for="inp3">Remember Me</label>
                </div>
            </div> */}
          <h5 type="submit">Login</h5>
          <button type='submit' >Login</button>
        </form>
    </div>
  )
}

export default Login