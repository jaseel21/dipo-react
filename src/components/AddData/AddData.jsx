import React from 'react'
import "./AddData.css"
import firebase from '../../firebase/config'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from "sweetalert2"
function AddData() {

  const navigate = useNavigate()
  const [name, setName] = useState("")
  const [father, setFather] = useState("")
  const [regi, setRegi] = useState("")
  const [address, setAddress] = useState("")
  const [birth, setBirth] = useState("")
  const [phone, setPhone] = useState("")
  const [whats, setWhats] = useState("")
  const [year, setYear] = useState("2019")
  const [book, setBook] = useState("false")
  const [certi, setCerti] = useState("false")
  const [exam, setExam] = useState("false")
  const [call, setCall] = useState("false")
  const [subject, setSubject] = useState("arabic")

  const handleSub = (e) => {
    e.preventDefault()
    firebase.firestore().collection("members").add({
      name: name,
      fname: father,
      rnumber: regi,
      address: address,
      birth: birth,
      phone: phone,
      wnumber: whats,
      year: year,
      book: book,
      certi: certi,
      exam: exam,
      call: call,
      subject: subject
    }).then(() => {
      

Swal.fire({
  position: 'center',
  icon: 'success',
  title: 'Successfully Submitted',
  showConfirmButton: false,
  timer: 1500
})
      navigate("/sub")
    })
  }
  return (
    <div className=''>
      {/* <div class="circle-1"></div>
      <div class="circle-2"></div> */}
      <div class="row">
        <div class="headLine">
          <div class="title">
            <h1 style={{ fontWeight: "bold", color: "rgb(0, 0, 0); text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5)" }}>Student Port</h1>
          </div>

        </div>
        <div class="container-fluid custom-container">
          <div class="form ">
            <div className='card'>
              <form onSubmit={handleSub}>
                <div className=' form-left '>
                  <div className='form-group '>
                    <label for="formGroupExampleInput">Student name</label>
                    <input required value={name} onChange={(e) => setName(e.target.value)} type="text" class="form-control" id="formGroupExampleInput" />
                  </div>
                  <div className='form-group col-12'>
                    <label for="formGroupExampleInput">Father name</label>
                    <input required value={father} onChange={(e) => setFather(e.target.value)} type="text" class="form-control" id="formGroupExampleInput" />
                  </div>
                  <div className='form-group col-12'>
                    <label for="formGroupExampleInput">Register number</label>
                    <input value={regi} onChange={(e) => setRegi(e.target.value)} type="text" class="form-control" id="formGroupExampleInput" />
                  </div>
                  <div className='form-group col-12'>
                    <label for="exampleFormControlTextarea1">Address</label>
                    <textarea required value={address} onChange={(e) => setAddress(e.target.value)} class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                  </div>
                  <div className='form-group col-12'>
                    <label for="exampleInputPassword1">Date of birth</label>
                    <input required value={birth} onChange={(e) => setBirth(e.target.value)} type="date" class="form-control" id="exampleInputPassword1" />
                  </div>
                  <div className='form-group col-12'>
                    <label for="exampleInputPassword1">Phone number</label>
                    <input required value={phone} onChange={(e) => setPhone(e.target.value)} type="number" class="form-control" id="exampleInputPassword1" />
                  </div>

                </div>

                <div className='form-right'>
                  <div className='form-group col-12'>
                    <label for="exampleInputPassword1">Whatsapp number</label>
                    <input required value={whats} onChange={(e) => setWhats(e.target.value)} type="number" class="form-control" id="exampleInputPassword1" />
                  </div>
                  <div className='form-group col-12'>
                    <label for="inputGroupSelect02">Text book</label>
                    <select onChange={(e) => setBook(e.target.value)} class="form-select" id="inputGroupSelect02">
                      <option value={false} >Not received</option>
                      <option value={true}>Received</option>
                    </select>
                  </div>
                  <div className='form-group col-12'>
                    <label for="inputGroupSelect02">Certificate</label>
                    <select onChange={(e) => setCerti(e.target.value)} class="form-select" id="inputGroupSelect02">
                      <option value={false} >Not received</option>
                      <option value={true} >Received</option>
                    </select>
                  </div>
                  <div className='form-group col-12'>
                    <label for="inputGroupSelect02">Exam</label>
                    <select required onChange={(e) => setExam(e.target.value)} class="form-select" id="inputGroupSelect02">
                      <option value={false} >Not Attented</option>
                      <option value={true}>Attented</option>
                    </select>
                  </div>
                  <div className='form-group col-12'>
                    <label for="inputGroupSelect02">Have we contacted you ?</label>
                    <select required onChange={(e) => setCall(e.target.value)} class="form-select" id="inputGroupSelect02">
                      <option value={false} >No</option>
                      <option value={true}>Yes</option>
                    </select>
                  </div>
                  <div className='form-group col-12'>
                    <label for="inputGroupSelect02">Year</label>
                    <select required onChange={(e) => setYear(e.target.value)} class="form-select" id="inputGroupSelect02">
                      <option value={2019} >2019</option>
                      <option value={2021} >2021</option>
                      <option value={2023} >2023</option>
                    </select>
                  </div>
                  <div className='form-group col-12'>
                    <label for="inputGroupSelect02">Subject</label>
                    <select required onChange={(e) => setSubject(e.target.value)} class="form-select" id="inputGroupSelect02">
                      <option value="arabic">Arabic</option>
                      <option value="urdu">Urdu</option>
                    </select>
                  </div>

                  <div className='form-group col-6'>
                    <button type="submit" className="submitBtn">Submit</button>
                    </div>
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
