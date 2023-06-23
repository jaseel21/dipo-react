import React from 'react'
import "./NavBar.css"

import { Link } from 'react-router-dom';
function NavBar() {
  return (
    <div class="navbar d-flex col-12 ">
            <nav class="navbar navbar-expand-lg  navbar-light col-12">
              <h6 class="navbar-brand" href="#">Diploma</h6>
              <a class="navbar-toggler" type="butt  on" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </a>
            
              <div class="collapse navbar-collapse unni" id="navbarSupportedContent">
                <div class="">
                  <ul class="navbar-nav mr-auto ">
                    <li class="nav-item active">
                      <Link className="nav-link tec" to="/" >HOME <span class="sr-only">(current)</span></Link>
                    </li>
                    <li class="nav-item">
                      <Link className="nav-link" to="/about">ABOUT</Link>
                    </li>
                    <li class="nav-item">
                      <Link className="nav-link" to="/contact">CONTACT</Link>
                    </li>
                  </ul>
                </div>
                
              </div>
              <div class="form-inline my-2 my-lg-0 d-none d-md-block d-sm-block">
                <button class="btn btn-outline-dark my-2 my-sm-0 login-btn" type="submit">Login</button>
              </div>
            </nav>
          </div>
    
  )
}

export default NavBar
