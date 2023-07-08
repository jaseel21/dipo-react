import React from 'react'
import "./EditData.css"
import firebase from '../../firebase/config'
import { useState,useContext } from 'react'
import { DataOfOne } from '../../store/DataForCard'
import { useNavigate } from 'react-router-dom'
import Swal from "sweetalert2"



function EditData() {


  
  const {personInfo}=useContext(DataOfOne)
  const {setPersonInfo}=useContext(DataOfOne)
    const navigate=useNavigate()
    



    
  const [name,setName]=useState(personInfo.name)
  const [father,setFather]=useState(personInfo.fname)
  const [regi,setRegi]=useState(personInfo.rnumber)
  const [address,setAddress]=useState(personInfo.address)
  const [birth,setBirth]=useState(personInfo.birth)
  const [phone,setPhone]=useState(personInfo.phone)
  const [whats,setWhats]=useState(personInfo.wnumber)
  const [year,setYear]=useState(personInfo.year)
  const [book,setBook]=useState(personInfo.book)
  const [certi,setCerti]=useState(personInfo.certi)
  const [exam,setExam]=useState(personInfo.exam)
  const [call,setCall]=useState(personInfo.call)
  const [subject,setSubject]=useState(personInfo.subject)
  const [id,setId]=useState(personInfo.id)
  console.log("inf",personInfo);
  

 
  const handleSub=(e)=>{
    
    e.preventDefault()
    firebase.firestore().collection("members").doc(personInfo.id).set({
      name:name,
      fname:father,
      rnumber:regi,
      address:address,
      birth:birth,
      phone:phone,
      wnumber:whats,
      year:year,
      book:book,
      certi:certi,
      exam:exam,
      call:call,
      subject:subject,
      id:id
    }).then(()=>{
      firebase.firestore().collection("members").doc(personInfo.id).get().then(data=>{
              setPersonInfo(data.data())
              console.log("dafault",data.data());
              Swal.fire({
                position: 'center',
                icon: 'success',
                text: 'applied your changes',
                showConfirmButton: false,
                timer: 1500
              })
              navigate("/profile")
             })
     
    })
  }



  return (
    <div>
      {/* <div class="circle-1"></div>
      <div class="circle-2"></div> */}
      <div class="formMain">
        <div class="headLine">
          <div class="title">
            <h1>Student Port</h1>
          </div>

        </div>
        <div class=" custom-container">
          <div class="form ">
           
              <form onSubmit={handleSub}>
                <div className="form-div">

                <div className=' form-left '>
                  <div className='form-group '>
                    <label for="formGroupExampleInput">Student name</label>
                    <input required value={name} onChange={(e) => setName(e.target.value)} type="text" class="form-control" id="formGroupExampleInput" />
                  </div>
                  <div className='form-group '>
                    <label for="formGroupExampleInput">Father name</label>
                    <input required value={father} onChange={(e) => setFather(e.target.value)} type="text" class="form-control" id="formGroupExampleInput" />
                  </div>
                  <div className='form-group '>
                    <label for="formGroupExampleInput">Register number</label>
                    <input value={regi} onChange={(e) => setRegi(e.target.value)} type="text" class="form-control" id="formGroupExampleInput" />
                  </div>
                  <div className='form-group '>
                    <label for="exampleFormControlTextarea1">Address</label>
                    <textarea required value={address} onChange={(e) => setAddress(e.target.value)} class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                  </div>
                  <div className='form-group '>
                    <label for="exampleInputPassword1">Date of birth</label>
                    <input required value={birth} onChange={(e) => setBirth(e.target.value)} type="date" class="form-control" id="exampleInputPassword1" />
                  </div>
                  <div className='form-group '>
                    <label for="exampleInputPassword1">Phone number</label>
                    <input required value={phone} onChange={(e) => setPhone(e.target.value)} type="number" class="form-control" id="exampleInputPassword1" />
                  </div>

                </div>

                <div className='form-right'>
                  <div className='form-group '>
                    <label for="exampleInputPassword1">Whatsapp number</label>
                    <input required value={whats} onChange={(e) => setWhats(e.target.value)} type="number" class="form-control" id="exampleInputPassword1" />
                  </div>
                  <div className='form-group '>
                    <label for="inputGroupSelect02">Text book</label>
                    <select defaultValue={book} required onChange={(e) => setBook(e.target.value)} class="form-select" id="inputGroupSelect02">
                      <option value={false} >Not received</option>
                      <option value={true}>Received</option>
                    </select>
                  </div>
                  <div className='form-group '>
                    <label for="inputGroupSelect02">Certificate</label>
                    <select defaultValue={certi} onChange={(e) => setCerti(e.target.value)} class="form-select" id="inputGroupSelect02">
                      <option value={false} >Not received</option>
                      <option value={true} >Received</option>
                    </select>
                  </div>
                  <div className='form-group '>
                    <label for="inputGroupSelect02">Exam</label>
                    <select defaultValue={exam} required onChange={(e) => setExam(e.target.value)} class="form-select" id="inputGroupSelect02">
                      <option value={false} >Not Attented</option>
                      <option value={true}>Attented</option>
                    </select>
                  </div>
                  <div className='form-group '>
                    <label for="inputGroupSelect02">Have we contacted you ?</label>
                    <select defaultValue={call} required onChange={(e) => setCall(e.target.value)} class="form-select" id="inputGroupSelect02">
                      <option value={false} >No</option>
                      <option value={true}>Yes</option>
                    </select>
                  </div>
                  <div className='form-group '>
                    <label for="inputGroupSelect02">Year</label>
                    <select defaultValue={year} required onChange={(e) => setYear(e.target.value)} class="form-select" id="inputGroupSelect02">
                      <option value={2019} >2019</option>
                      <option value={2021} >2021</option>
                      <option value={2023} >2023</option>
                    </select>
                  </div>
                  <div className='form-group '>
                    <label for="inputGroupSelect02">Subject</label>
                    <select defaultValue={subject} required onChange={(e) => setSubject(e.target.value)} class="form-select" id="inputGroupSelect02">
                      <option value="arabic">Arabic</option>
                      <option value="urdu">Urdu</option>
                    </select>
                  </div>

                 <div className="form-group"><button  class="submitBtn" type="submit" >Submit</button> </div>
                    
                  
                </div>
                </div>
                
              </form>
           
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditData
