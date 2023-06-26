import React from 'react'
import "./AddData.css"
import firebase from '../../firebase/config'
import { useState } from 'react'
function AddData() {

  const [name,setName]=useState("")
  const [father,setFather]=useState("")
  const [regi,setRegi]=useState("")
  const [address,setAddress]=useState("")
  const [birth,setBirth]=useState("")
  const [phone,setPhone]=useState("")
  const [whats,setWhats]=useState("")
  const [year,setYear]=useState("")
  const [book,setBook]=useState("")
  const [certi,setCerti]=useState("")
  const [exam,setExam]=useState("")
  const [call,setCall]=useState("")

  const handleSub=(e)=>{
    e.preventDefault()
    firebase.firestore().collection("members").add({
      name:name,
      fname:father,
      rnumber:regi,
      address:address,
      birth:birth,
      phone:phone,
      whats:whats,
      year:year,
      book:book,
      certi:certi,
      exam:exam,
      call:call
    }).then(()=>{
      alert("form succusfuly submitted")
    })
  }
  return (
    <div>
      {/* <div class="circle-1"></div>
      <div class="circle-2"></div> */}
      <div class="row">
        <div class="headLine">
            <div class="title">
                <h1 style={{fontWeight: "bold" ,color:"rgb(0, 0, 0); text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5)"}}>Student Port</h1>
            </div> 
            
        </div>
        <div class="container-fluid custom-container">
            <div class="form  col-md-12 ">
                <div className='card sm-12 col-md-6'>
                    <form onSubmit={handleSub}> 
                        <div className='form-left col-sm-12 col-md-6'>
                        <div className='form-group col-12'>
                            <label for="formGroupExampleInput">Student name</label>
                            <input value={name} onChange={(e)=>setName(e.target.value)} type="text" class="form-control" id="formGroupExampleInput"/>
                          </div>
                          <div  className='form-group col-12'>
                            <label for="formGroupExampleInput">Father name</label>
                            <input value={father} onChange={(e)=>setFather(e.target.value)} type="text" class="form-control" id="formGroupExampleInput"/>
                          </div>
                          <div  className='form-group col-12'>
                            <label for="formGroupExampleInput">Register number</label>
                            <input value={regi} onChange={(e)=>setRegi(e.target.value)} type="text" class="form-control" id="formGroupExampleInput" />
                          </div>
                          <div className='form-group col-12'>
                            <label for="exampleFormControlTextarea1">Address</label>
                            <textarea value={address} onChange={(e)=>setAddress(e.target.value)} class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                          </div>
                          <div className='form-group col-12'>
                            <label for="exampleInputPassword1">Date of birth</label>
                            <input value={birth} onChange={(e)=>setBirth(e.target.value)} type="date" class="form-control" id="exampleInputPassword1"/>
                          </div>
                          <div className='form-group col-12'>
                            <label for="exampleInputPassword1">Phone number</label>
                            <input value={phone} onChange={(e)=>setPhone(e.target.value)} type="number" class="form-control" id="exampleInputPassword1"/>
                          </div>
                          
                        </div>

                          <div className='form-right col-sm-12 col-md-6'>
                          <div className='form-group col-12'>
                            <label for="exampleInputPassword1">Whatsapp number</label>
                            <input value={whats} onChange={(e)=>setWhats(e.target.value)} type="number" class="form-control" id="exampleInputPassword1"/>
                          </div>
                          <div className='form-group col-12'>
                            <label for="inputGroupSelect02">Text book</label>
                            <select value={book} onChange={(e)=>setBook(e.target.value)} class="form-select" id="inputGroupSelect02">
                              <option value={false} selected>Not received</option>
                              <option value={true}>Received</option>
                            </select>
                          </div>
                          <div className='form-group col-12'>
                            <label for="inputGroupSelect02">Certificate</label>
                            <select value={certi} onChange={(e)=>setCerti(e.target.value)} class="form-select" id="inputGroupSelect02">
                              <option value={false} selected>Not received</option>
                              <option value={true} >Received</option>
                            </select>
                          </div>
                          <div className='form-group col-12'>
                            <label for="inputGroupSelect02">Exam</label>
                            <select value={exam} onChange={(e)=>setExam(e.target.value)} class="form-select" id="inputGroupSelect02">
                              <option value={false} selected>Not Attented</option>
                              <option value={true}>Attented</option>
                            </select>
                          </div>
                          <div className='form-group col-12'>
                            <label for="inputGroupSelect02">Have we contacted you ?</label>
                            <select value={call} onChange={(e)=>setCall(e.target.value)} class="form-select" id="inputGroupSelect02">
                              <option value={false} selected>No</option>
                              <option value={true}>Yes</option>
                            </select>
                          </div>
                          <div className='form-group col-12'>
                            <label for="inputGroupSelect02">Subject</label>
                            <select onChange={(e)=>setCall(e.target.value)} class="form-select" id="inputGroupSelect02">
                              <option selected value="Arebic">Arabic</option>
                              <option value="Urdu">Urdu</option>
                            </select>
                          </div>
                          
                        <div className='form-group col-12 btn-div'><button type="submit" className="submitBtn">Submit</button></div>
                          </div>
                      </form>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default AddData
