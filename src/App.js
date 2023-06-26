import React from 'react'
import "./App.css"
import {Route,Routes} from "react-router-dom"
import Home from "./pages/home/Home"
import Form  from "./pages/Form/Form"
import NavBar from './components/NavBar/NavBar'
import ListPage from './components/ListPage/ListPage'
import Member from './store/Members'
import ProfaileCard from "./components/ProfileCard/ProfileCard"
import PersonInfo from './store/DataForCard'




function App() {
  return (
    <div>
      <Member>
        <PersonInfo>

      <NavBar/>
      <Routes>
        <Route path='/' Component={Home}>

        </Route>
        <Route path='/sub' Component={Form}>
        </Route>

        <Route path="/list" Component={ListPage}></Route>
        
        <Route path='/profile' Component={ProfaileCard}/>

        <Route path='/card' />
      </Routes>
        </PersonInfo>

      </Member>

      
    </div>
  )
}

export default App
