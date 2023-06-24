import React, { useEffect } from 'react';
import './NavBar.css';

function NavBar() {
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
          <a href="#" className="action_btn">
            Login
          </a>
          <div className="toggle_btn" onClick={toggleMenu}>
            <i className="fa-solid fa-bars"></i>
          </div>
        </div>
        <div className="dropdown_menu">
          <li>
            <a href="#">// home</a>
          </li>
          <li>
            <a href="#">// arabic</a>
          </li>
          <li>
            <a href="#">// urdu</a>
          </li>
          <li>
            <a href="#" className="action_btn">
              Login
            </a>
          </li>
          <li>
            <p>© 2023. Made with passion by Alathoorpadi Dars.<br/>All right reserved.</p>
          </li>
        </div>
      </header>
    </div>
  );
}

export default NavBar;
