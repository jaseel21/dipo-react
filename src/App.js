import React from 'react'
import "./App.css"
import {Route,Routes} from "react-router-dom"
import Home from "./pages/home/Home"
import Form  from "./pages/Form/Form"
import NavBar from './components/NavBar/NavBar'
import ListPage from './components/ListPage/ListPage'
import Member from './store/Members'


function App() {
  return (
    <div>
      <Member>

      <NavBar/>
      <Routes>
        <Route path='/' Component={Home}>

        </Route>
        <Route path='/sub' Component={Form}>
        </Route>

        <Route path="/list" Component={ListPage}></Route>
      </Routes>
      </Member>

      
    </div>
  )
}

export default App
