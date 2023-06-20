import React from 'react'
import "./App.css"
import {Route,Routes} from "react-router-dom"
import Home from "./pages/home/Home"
import Form  from "./pages/Form/Form"
import NavBar from './components/NavBar/NavBar'

function App() {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path='/' Component={Home}>

        </Route>
        <Route path='/' Component={Form}>

        </Route>
      </Routes>

      
    </div>
  )
}

export default App
