import React, { useContext, useEffect, useState } from 'react';
import './NavBar.css';
import { Link, useNavigate } from 'react-router-dom';
import { Authcontext } from "../../store/FirebaseContext"
import firebase from '../../firebase/config';
import Swal from 'sweetalert2';
import Home from '../../pages/home/Home';



function NavBar() {
  const [state, setState] = useState(false)
  const navigate = useNavigate()
  const { user } = useContext(Authcontext)

  useEffect(() => {
    // Attach event listener when the component mounts
    window.addEventListener('click', handleClickOutside);

    return () => {
      // Remove event listener when the component unmounts
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  function handleClickOutside(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }



  useEffect(() => {
    const expertiseItems = document.querySelectorAll(".expertise-item");

    expertiseItems.forEach(function (item, index) {
      item.style.animationDelay = index * 0.2 + "s";
    });
  }, []);
  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  const toggleMenu = () => {
    const dropDownMenu = document.querySelector('.dropdown_menu');
    const toggleBtnIcon = document.querySelector('.toggle_btn i');
    dropDownMenu.classList.toggle('open');
    const isOpen = dropDownMenu.classList.contains('open');

    toggleBtnIcon.className = isOpen
      ? 'fa-solid fa-xmark'
      : 'fa-solid fa-bars';
  };


  const handleLogout = () => {

    toggleMenu()

    Swal.fire({
      title: 'Logout',
      text: 'Are you sure you want to log out?',
      icon: 'warning',
      
      showCancelButton: true,
      confirmButtonColor: '#f44336',
      cancelButtonColor: '#2E8B57',
      confirmButtonText: 'Logout',
    }).then((result) => {
      if (result.isConfirmed) {
        firebase.auth().signOut();
    navigate('/login')
        
      }
    });
  };




  const Login = () => {

    
      navigate("/login")
    
  }

  
  return (
    <div>
      <header>
        <div className="navbar">
          <div className="logo">
            <a onClick={()=>{navigate("/home")}}>
              Diploma<span id="dot"><b>.</b></span>
              <span id="unscoire">_</span>
            </a>
          </div>
          <ul className="links">
            <li>
              <label htmlFor="">01</label>
              <a onClick={()=>{navigate("/")}}>// home</a>
            </li>
            <li>
              <label htmlFor="">02</label>
              <a onClick={()=>{navigate("/about")}}>// about</a>
            </li>
            <li>
              <label htmlFor="">03</label>
              <a onClick={()=>{navigate("/contact")}}>// contact</a>
            </li>
          </ul>
          {/* <a  onClick={Login} className="action_btn">
           
                    
          
          </a> */}
          <a className='LoginAndLogout'>
            {user ? <div class="dropdown">
              <button onClick={myFunction} class="dropbtn">ADSA  <i class="fa fa-caret-down"></i></button>
              <div id="myDropdown" class="dropdown-content">
                <a className='Logout' onClick={handleLogout}>Logout</a>

              </div>
            </div> :
            <button onClick={()=>{navigate("/login")}} class="dropbtn">Login</button>
            }
            

          </a>




          <div className="toggle_btn" onClick={toggleMenu}>
            <i className="fa-solid fa-bars"></i>
          </div>
        </div>
        <div className="dropdown_menu">
          <li>
            <a onClick={()=>{navigate("/home");toggleMenu();}}>// home</a>
          </li>
          <li>
            <a onClick={()=>{navigate("/about");toggleMenu();}}>// about</a>
          </li>
          <li>
            <a onClick={()=>{navigate("/contact");toggleMenu();}}>// contact</a>
          </li>
        {user ? 
    

        <button className='LogStatus'  onClick={handleLogout}>Logout</button>
   :
   <button className='LogStatus' onClick={()=>{navigate("/Login");toggleMenu();}}>Login</button>
   
   }
       
            
           
          
          <li>
            <p>© 2023. Made with passion by Alathoorpadi Dars.<br />All right reserved.</p>
          </li>
        </div>
      </header>
    </div>
  );
}

export default NavBar;
