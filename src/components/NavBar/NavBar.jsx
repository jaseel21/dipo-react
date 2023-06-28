import React, { useContext, useEffect } from 'react';
import './NavBar.css';
import { useNavigate } from 'react-router-dom';
import { Authcontext } from '../../store/FirebaseContext';
import firebase from "../../firebase/config"


function NavBar() {

  const navigate = useNavigate()
  const { user } = useContext(Authcontext)
  console.log(user);

  const Login = () => {
    if (!user) {
      
      navigate("/login")
    }
  }
  useEffect(() => {
    const expertiseItems = document.querySelectorAll(".expertise-item");

    expertiseItems.forEach(function (item, index) {
      item.style.animationDelay = index * 0.2 + "s";
    });
  }, []);

  const toggleMenu = () => {
    const dropDownMenu = document.querySelector('.dropdown_menu');
    const toggleBtnIcon = document.querySelector('.toggle_btn i');
    dropDownMenu.classList.toggle('open');
    const isOpen = dropDownMenu.classList.contains('open');

    toggleBtnIcon.className = isOpen
      ? 'fa-solid fa-xmark'
      : 'fa-solid fa-bars';
  };

  return (
    <div>
      <header>
        <div className="navbar">
          <div className="logo">
            <a href="search">
              Diploma<span id="dot"><b>.</b></span>
              <span id="unscoire">_</span>
            </a>
          </div>
          <ul className="links">
            <li>
              <label htmlFor="">01</label>
              <a href="#">// home</a>
            </li>
            <li>
              <label htmlFor="">02</label>
              <a href="#">// arabic</a>
            </li>
            <li>
              <label htmlFor="">03</label>
              <a href="#">// urdu</a>
            </li>
          </ul>


          <a >
            
          </a>
          <li>
            <a >
              
            </a>


          <div class="dropdown">
            <a onClick={Login} className="action_btn" class="dropbtn">{user ? "ADSA" : "Login"}
              <i class="fa fa-caret-down"></i>
            </a>
            {user &&


            <div class="dropdown-content">
              <a onClick={() => {
              firebase.auth().signOut();
              navigate('/login')
            }} className="action_btn">{user && "LogOut"}</a>

            </div>
            }
          </div>
          </li>


          <div className="toggle_btn" onClick={toggleMenu}>
            <i className="fa-solid fa-bars"></i>
          </div>
        </div>
        <div className="dropdown_menu">
          <li>
            <a >// home</a>
          </li>
          <li>
            <a >// arabic</a>
          </li>
          <li>
            <a >// urdu</a>
          </li>
          <li>
            <a onClick={Login} className="action_btn">
              {user ? "ADSA" : "Login"}
            </a>

          </li>
          <li>
            {user && <a className="action_btn">
              Logout
            </a>}
          </li>

          <div class="dropdown">
            <button class="dropbtn">Dropdown
              <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
              <a >LogOut</a>

            </div>
          </div>

          <li>
            <p>© 2023. Made with passion by Alathoorpadi Dars.<br />All right reserved.</p>
          </li>
        </div>
      </header>
    </div>
  );
}

export default NavBar;
