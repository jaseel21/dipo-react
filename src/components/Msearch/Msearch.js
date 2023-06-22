import React from 'react'
import "./Msearch.css"
import { useState } from 'react'
import firebase from "../../firebase/config"
import { useContext } from 'react'
import { MemberContext } from '../../store/Members'

const sm = [];
function Msearch() {

  // const [sm,setSearchMermers]=useState([])
  const [search, setSearch] = useState("")
  const [state, setState] = useState([])
  const { setMembers } = useContext(MemberContext)
  const { members } = useContext(MemberContext)
  const Search = (e) => {
    e.preventDefault()
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
        console.log(search);
        if (allMembers) {
          allMembers.map(snap => {
            if (snap.name === "jaseel") {



              console.log(snap.id);

              firebase.firestore().collection("members").doc(snap.id).get().then(data => {

                if (state) {
                  setState([{state},data.data()])
                }else{
                  setState([data.data()])
                }
                

              }
              )

            }
          })
        }
        // const SearchMermers ={
        //   name:state.name,

        // }   
        // setSearchMermers(SearchMermers)

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
          <div class="container ">

          </div>

          {console.log(state)}
          <>

            {


              state.map(mem => {
                return (

                  <div >
                    <div class="container ">
                      <div class="row justify-content-center">

                        <div class="carid col-md-5 ">

                          <div>
                            <h3>{mem.name}</h3>
                          </div>
                          <div>
                            <p>{mem.birth}</p>
                            <p>{mem.fname} </p>
                          </div>
                        </div>


                      </div>
                    </div>
                  </div>

                )
              }

              )


            }
          </>





        </div>

    </div>
  )
}

export default Msearch
