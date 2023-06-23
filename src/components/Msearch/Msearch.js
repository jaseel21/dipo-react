import React from 'react'
import "./Msearch.css"
import { useState } from 'react'
import firebase from "../../firebase/config"
import { useContext } from 'react'
import { MemberContext } from '../../store/Members'
import { isEmpty } from "lodash"


function Msearch() {

  // const [sm,setSearchMermers]=useState([])
  const [search, setSearch] = useState("")
  const [state, setState] = useState([]);
  const { setMembers } = useContext(MemberContext)
  const [card,setCard]=useState("")
  // const { members } = useContext(MemberContext)






  const Search = (e) => {

    const Update = (obj) => {
      setState((prev) => {
        return [...prev, obj];
      });
      console.log("Data added to state:", obj);
    };
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

      console.log(search);
      if (allMembers) {

        allMembers.map((snap) => {

          if (snap.name === search) {


            console.log(snap.id);


            allMembers.map((obj) => {


              if (obj.id === snap.id) {


                Update(obj)
              }
            })

            // firebase.firestore().collection("members").doc(snap.id).get().then(data => {



            //    const Data ={
            //     ...data.data(),
            //     id:snap.id
            //   }
            //   console.log("DATA",Data);


            //   const addObjectToArray = (Data) => {
            //     setState([...state, Data]);
            //   };     
            //   addObjectToArray(Data)

            // }
            // )

          }





        })


      }





    }))

  }
  return (
    <div >
      <div className="container main-body  search-div">
        <div className="row">

          <div className=" col-md-12">
            <div className="img-container text-center">

              <img src="https://alathurpadidars.in/wp-content/uploads/2019/08/Dars-Site-Logo1.png" srcset="https://alathurpadidars.in/wp-content/uploads/2019/08/Dars-Site-Logo1.png 427w, https://alathurpadidars.in/wp-content/uploads/2019/08/Dars-Site-Logo1-300x110.png.webp 300w" sizes="(max-width: 427px) 100vw, 427px" height="150" width="450" alt="Alathurpadi Dars" title="Dars Site Logo1"></img>
            </div>
          </div>

          <div className=" col-12 col-md-12">
            <input className='sinput col-5' onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Search" aria-label="Search" />
            <a className='sicon col-1' onClick={Search} type="submit">
              <i class="fa-solid fa-magnifying-glass"></i>
            </a >



          </div>

          <div class="main">
            <div class="container ">

            </div>

            {console.log("state data", state)}
            <>

              {

                state.map(mem => {
                  return (

                    <div onClick={()=>{setCard(mem)}} className='col-12 col-md-6'>
                      <div class="container ">
                        <div class="row ">

                          <div class="carid col-md-6 ">
                            <h6><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-vcard" viewBox="0 0 16 16">
                              <path d="M5 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm4-2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5ZM9 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4A.5.5 0 0 1 9 8Zm1 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Z" />
                              <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2ZM1 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H8.96c.026-.163.04-.33.04-.5C9 10.567 7.21 9 5 9c-2.086 0-3.8 1.398-3.984 3.181A1.006 1.006 0 0 1 1 12V4Z" />
                            </svg></h6>

                            <div>
                              <h6 className='text col-2'>{mem.name}</h6>
                            </div>

                            <p className='text col-7'> {mem.birth}</p>
                            <p className='text col-2'>{mem.fname} </p>
                            <p hidden>{mem.id}</p>
                            


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




      </div>




    </div>
  )
}

export default Msearch
