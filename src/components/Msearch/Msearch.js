import React from 'react'
import "./Msearch.css"
import { useState } from 'react'
import firebase from "../../firebase/config"
import { useContext } from 'react'
import { MemberContext } from '../../store/Members'

function Msearch() {

  const [search, setSearch] = useState("")
  const [state, setState] = useState([])
  const { setMembers } = useContext(MemberContext)
  const { members } = useContext(MemberContext)
  const Search = (e) => {
    e.preventDefault()
    console.log("hhhhhhhhhh");
    firebase.firestore().collection("members").get().then(((snapshort) => {

      const allMembers = snapshort.docs.map((member) => {


        return {
          ...member.data(),
          id: member.id
        }


      })
      setMembers(allMembers)
      console.log(allMembers);
      {
        if (allMembers) {
          allMembers.map(snap => {
            if (snap.name === "muthu") {


              console.log(snap.id);

              firebase.firestore().collection("members").doc(snap.id).get().then(data => {

                setState(data.data())
                console.log();

              }
              )

            }
          })
        }

      }



    }))

  }
  return (
    <div>
      <div class="container main-body col-md-12 search-div">
        <div class="img-container">
          <img src="./img/Logo.png" alt="" />
        </div>
        <div class="search-bar col-xs-6 col-md-6 ">
          <input onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Search" aria-label="Search" />
          <button onClick={Search} type="submit">
            <i class="fa-solid fa-magnifying-glass"></i>
          </button >

        </div>
      </div>

      <div class="main">
        <div class="container">

        </div>
        {/* {members.map(mem=>{
          return <div >
          <div class="container">
            <div class="row justify-content-center">

              <div class="carid col-md-5">

                <div>
                  <h3>hu</h3>
                </div>
                <div>
                  <p>Register Number : 313</p>
                  <p>S/o abdulla </p>
                </div>
              </div>


            </div>
          </div>
        </div>
        })} */}



      </div>


    </div>
  )
}

export default Msearch
