import React, { useState } from 'react'
import './Login.css'
import firebase from '../../firebase/config'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import 'animate.css';



function Login() {
    const[password,setPassword]=useState("")
     const[email,setEmail]=useState("")
     const navigate=useNavigate()

   
    const handleLogin=(e)=>{
        e.preventDefault()
        firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
            

Swal.fire({
  title: 'Welcome back!',
  text:"you are an 'ADSA' member",
  showClass: {
    popup: 'animate__animated animate__fadeInDown'
  },
  hideClass: {
    popup: 'animate__animated animate__fadeOutUp'
  }
})
            navigate("/")
            
        }).catch((error)=>{
            Swal.fire({
                icon: 'error',
                title: 'Error...',
                text: 'Something went wrong!',
                
              })
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
         
          <button type='submit' >Login</button>
          
        </form>
    </div>
  )
}

export default Login