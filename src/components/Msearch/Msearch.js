import React from 'react'
import "./Msearch.css"

function Msearch() {
  return (
    <div>
      <div class="container main-body col-md-12 search-div">
          <div class="img-container">
            <img src="./img/Logo.png" alt=""/>
          </div>
          <div class="search-bar col-xs-6 col-md-6 ">
            <input type="text" placeholder="Search" aria-label="Search"/>
            <button type="submit">
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </div>
    </div>
  )
}

export default Msearch
