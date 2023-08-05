import React from 'react'
import "./AddData.css"
import firebase from '../../firebase/config'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from "sweetalert2"
import Footer from '../Footer/Footer'
function AddData() {
  const navigate = useNavigate()

  const [id,setId]=useState("")
  const [name, setName] = useState("")
  const [father, setFather] = useState("")
  const [regi, setRegi] = useState("")
  const [address, setAddress] = useState("")
  const [birth, setBirth] = useState("")
  const [phone, setPhone] = useState("")
  const [whats, setWhats] = useState("")
  const [year, setYear] = useState("2018")
  const [book, setBook] = useState("Not received")
  const [certi, setCerti] = useState("Not received")
  const [exam, setExam] = useState("Not received")
  const [call, setCall] = useState("No")
  const [subject, setSubject] = useState("arabic")

  

  

  const handleSub = (e) => {

    fetch('https://sheetdb.io/api/v1/m97aq338b4f11', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        data: [
            {
                'id': id,
                'Name': name,
                'Fname': father,
                "Rnumber" : regi,
                "Address":address,
                "birth":birth,
                "Phone":phone,
                "Wnumber":whats,
                "Year":year,
                "Book":book,
                "Certificate":certi,
                "Exam":exam,
                "Contact":call,
                "Subject":subject
            }
        ]
    })
})
  .then((response) => response.json())
  .then((data) => console.log(data));
    e.preventDefault()
    firebase.firestore().collection("members").add({
      gid :id,
      name: name.toLowerCase(),
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
      setName("")
      setFather("")      
      setAddress("")
      setBirth("")
      setBook("Not received")
      setCall("No")
      setCerti("Not received")
      setExam("Not received")
      setPhone("")
      setRegi("")
      setSubject("arabic")
      setWhats("")
      setYear("2018")

Swal.fire({
  position: 'center',
  icon: 'success',
  text: 'Successfully Submitted',
  showConfirmButton: false,
  
  timer: 1500
})
      navigate("/form")
    })
  }

// import React, { useState } from 'react';
// import firebase from '../../firebase/config';
// import { useNavigate } from 'react-router-dom';
// import Swal from "sweetalert2";

// function AddData() {

//   const navigate = useNavigate();
//   const [name, setName] = useState("")
//   const [father, setFather] = useState("")
//   const [regi, setRegi] = useState("")
//   const [address, setAddress] = useState("")
//   const [birth, setBirth] = useState("")
//   const [phone, setPhone] = useState("")
//   const [whats, setWhats] = useState("")
//   const [year, setYear] = useState("2018")
//   const [book, setBook] = useState("false")
//   const [certi, setCerti] = useState("false")
//   const [exam, setExam] = useState("false")
//   const [call, setCall] = useState("false")
//   const [subject, setSubject] = useState("arabic")

//   const handleSub = (e) => {
//     e.preventDefault()

//     // Get the form data
//     const formData = {
//       name: name.toLowerCase(),
//       fname: father,
//       rnumber: regi,
//       address: address,
//       birth: birth,
//       phone: phone,
//       wnumber: whats,
//       year: year,
//       book: book,
//       certi: certi,
//       exam: exam,
//       call: call,
//       subject: subject
//     };

//     // Send the form data to Google Sheets
//     const url = "https://script.google.com/macros/s/AKfycbwJsIi8536-g6mY-i1611z_a3425471f4_u9/exec";
//     fetch(url, {
//       method: "POST",
//       body: JSON.stringify(formData)
//     })
//       .then((response) => {
//         if (response.ok) {
//           // Success!
//           Swal.fire({
//             position: 'center',
//             icon: 'success',
//             text: 'Successfully Submitted',
//             showConfirmButton: false,
//             timer: 1500
//           });
//           navigate("/form");
//         } else {
//           // Error!
//           console.log(response);
//         }
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//    N     }

  return (
    <div>
      <div >
      {/* <div class="circle-1"></div>
      <div class="circle-2"></div> */}
      <div class="formMain">
        <div class="headLine">
          <div class="title">
            {/* <h1>Student Port</h1> */} <br /><br />
          </div>

        </div>
        <div class=" custom-container">
          <div class="form ">
           
              <form onSubmit={handleSub}>
                <div className="form-div">

                <div className=' form-left '>
                  <div className='form-group '>
                    <label for="formGroupExampleInput">Student name</label>
                    <input required value={name} name="Name" onChange={(e) => setName(e.target.value)} type="text" class="form-control" id="formGroupExampleInput sname"/>
                  </div>
                  <div className='form-group '>
                    <label for="formGroupExampleInput">Father name</label>
                    <input required value={father} name="FatherName" onChange={(e) => setFather(e.target.value)} type="text" class="form-control" id="formGroupExampleInput fname" />
                  </div>
                  <div className='form-group '>
                    <label for="formGroupExampleInput">Register number</label>
                    <input value={regi} name='RegisterNumber' onChange={(e) => setRegi(e.target.value)} type="text" class="form-control" id="formGroupExampleInput" />
                  </div>
                  <div className='form-group '>
                    <label for="exampleFormControlTextarea1">Address</label>
                    <textarea required value={address} name='Address' onChange={(e) => setAddress(e.target.value)} class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                  </div>
                  <div className='form-group '>
                    <label for="exampleInputPassword1">Date of birth</label>
                    <input required value={birth} name='DOB' onChange={(e) => setBirth(e.target.value)} type="date" class="form-control" id="exampleInputPassword1" />
                  </div>
                  <div className='form-group '>
                    <label for="exampleInputPassword1">Phone number</label>
                    <input required value={phone} name='PhoneNumber' onChange={(e) => setPhone(e.target.value)} type="number" class="form-control" id="exampleInputPassword1" />
                  </div>

                </div>

                <div className='form-right'>
                  <div className='form-group '>
                    <label for="exampleInputPassword1">Whatsapp number</label>
                    <input required value={whats} name='WhtsappNumber' onChange={(e) => setWhats(e.target.value)} type="number" class="form-control" id="exampleInputPassword1" />
                  </div>
                  <div className='form-group '>
                    <label for="inputGroupSelect02">Text book</label>
                    <select name='TextBook' onChange={(e) => setBook(e.target.value)} class="form-select" id="inputGroupSelect02">
                      <option value={"Not received"}>Not received</option>
                      <option value={"Received"}>Received</option>
                    </select>
                  </div>
                  <div className='form-group '>
                    <label for="inputGroupSelect02">Certificate</label>
                    <select name='Certificate' onChange={(e) => setCerti(e.target.value)} class="form-select" id="inputGroupSelect02">
                      <option value={"Not received"} >Not received</option>
                      <option value={"Received"} >Received</option>
                    </select>
                  </div>
                  <div className='form-group '>
                    <label for="inputGroupSelect02">Exam</label>
                    <select name='Exam' required onChange={(e) => setExam(e.target.value)} class="form-select" id="inputGroupSelect02">
                      <option value={"Not Attented"} >Not Attented</option>
                      <option value={"Attented"}>Attented</option>
                    </select>
                  </div>
                  <div className='form-group '>
                    <label for="inputGroupSelect02">Have we contacted you ?</label>
                    <select name='Contacted' required onChange={(e) => setCall(e.target.value)} class="form-select" id="inputGroupSelect02">
                      <option value={"No"} >No</option>
                      <option value={"Yes"}>Yes</option>
                    </select>
                  </div>
                  <div className='form-group '>
                    <label for="inputGroupSelect02">Year</label>
                    <select name='Year' required onChange={(e) => setYear(e.target.value)} class="form-select" id="inputGroupSelect02">
                      <option value={2018} >2018 </option>
                      <option value={2029} >2019 </option>
                      <option value={2020} >2020 </option>
                      <option value={2021} >2021 </option>
                      <option value={2022} >2022 </option>
                      <option value={2023} >2023 </option>
                      <option value={2024} >2024 </option>


                    </select>
                  </div>
                  <div className='form-group '>
                    <label for="inputGroupSelect02">Subject</label>
                    <select name='Subject' required onChange={(e) => setSubject(e.target.value)} class="form-select" id="inputGroupSelect02">
                      <option value="arabic">Arabic</option>
                      <option value="urdu">Urdu</option>
                    </select>
                  </div>

                 <div className="form-group"><button onClick={()=>{setId(Date())}} class="submitBtn" type="submit" >Submit</button> </div>
                    
                  
                </div>
                </div>
                
               </form>

               {/* <form onSubmit={(e) => Submit(e)}>
                 <input type="text" name='Name' />
                 <input type="text" name='FatherName' />
                 <input type="text" name='Email' />
                 <input type="text" name='Message' />
                 <input type="submit" name='Name' />
               </form> */}
           
           </div>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  )
}

export default AddData
