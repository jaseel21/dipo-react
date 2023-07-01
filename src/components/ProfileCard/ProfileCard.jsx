
import React, { useRef, useEffect,useContext,useState } from 'react';
import VanillaTilt from 'vanilla-tilt';
import 'vanilla-tilt/dist/vanilla-tilt.min.js';
import './ProfileCard.css'
import PersonInfo, { DataOfOne } from '../../store/DataForCard';



import firebase from '../../firebase/config';
import { useNavigate } from 'react-router-dom';
import { Authcontext } from '../../store/FirebaseContext';

const ProfileCard = () => {
    const {user}=useContext(Authcontext)
  const tiltRef = useRef(null);
  const {personInfo}=useContext(DataOfOne);
 
  const navigate = useNavigate()

 
  
   

  const Remove=()=>{
    console.log("personInfoId",personInfo.id);

    if (user) {
        alert("want you delete")
        firebase.firestore().collection("members").doc(personInfo.id).delete().then(()=>{
        navigate("/")
    })
    }else{
        navigate("/login")
    }
    
    
  }

  const EditData=()=>{
    if (user) {
        navigate("/edit")
    }else{

        navigate("/login")
    }
    
  }
 
  useEffect(() => {

    VanillaTilt.init(tiltRef.current, {
      max: 10,
      speed: 400,
      glare: true,
      'max-glare': 0.5,
    });
  }, []);

  return (
    <div className='cardContainer'>
        <div className="circle-1"></div>
    <div className="circle-2"></div>
    <div ref={tiltRef} className="card">
        <img src="https://novastela.com/wp-content/uploads/2021/05/steve-and-denesh.png" className="user" alt=""/>
        <h1>{personInfo.name}</h1>
        <span className="text1"><span>s/o</span> {personInfo.fname}</span>
        <div className="line"></div>
        <div className="text2">
            <div className="form-f">
                <div className="form1">
                    <p><b>Register Number</b></p>
                    <p><b>Address</b></p>
                </div>
                <div className="coma1">
                    <p><b>:</b></p>
                    <p><b>:</b></p>
                </div>
                <div className="data1">
                    <p>{personInfo.rnumber}</p>
                    <p>{personInfo.address}</p>
                </div>
            </div>
            <div className="form-l">
                <div className="form1">
                    <p><b>Subject</b></p>
                    <p><b>Date of birth</b></p>
                    <p><b>Phone number</b> </p>
                    <p>Whatsapp number<b></b></p>
                    <p><b>Year</b></p>
                    <p><b>Text book</b> </p>
                    <p><b>Certificate</b> </p>
                    <p><b>Exam</b> </p>
                    <p><b>Have we contacted you ?</b></p>
                </div>
                <div className="coma1">
                    <p><b>:</b></p>
                    <p><b>:</b></p>
                    <p><b>:</b></p>
                    <p><b>:</b></p>
                    <p><b>:</b></p>
                    <p><b>:</b></p>
                    <p><b>:</b></p>
                    <p><b>:</b></p>
                    <p><b>:</b></p>
                </div>
                <div className="data1">
                    <p>{personInfo.subject}</p>
                    <p>{personInfo.birth}</p>
                    <p>{personInfo.phone}</p>
                    <p>{personInfo.wnumber}</p>
                    <p>{personInfo.year}</p>
                   {personInfo.book==="true" ? <p className='recived'>Received</p> : <p className='n-recived'>Not Received</p>} 
                   {personInfo.certi==="true" ? <p className='recived'>Received</p> : <p className='n-recived'>Not Received</p>} 
                   {personInfo.exam==="true" ? <p className='recived'>Attented</p> : <p className='n-recived'>Not Attented</p>} 
                   {personInfo.call==="true" ? <p className='recived'>Contacted</p> : <p className='n-recived'>Not Contacted</p>} 
                </div>
            </div>
            <div className="tags">
                <a  onClick={EditData}><i class="fa-solid fa-pen-to-square icon-1"></i></a>
                <a  onClick={Remove} ><i class="fa-solid fa-trash icon-2"></i></a>
            </div>
        </div>
    </div>
    </div>
  );
};

export default ProfileCard;
