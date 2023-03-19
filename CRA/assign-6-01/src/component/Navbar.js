import React from 'react'
import './Maincard.css'


function Navbar() {
  return (
    <div id="main_container">
    <div id="navheader">
      <div id='firstNAv'>
      <div id="secondNav">
      <img src='https://cdn.iconscout.com/icon/free/png-256/hootsuite-3521491-2944935.png'height="20px" width="20px" />
      <h2>hootsuite</h2>
      </div>
      <div id='thirdNav'>
      <p>Platforms</p>
      <p>Plans</p>
      <p>Enterprice</p>
      <p>Resources</p>
      <p>Education</p>
      </div>
      </div>
      <div id='lastNav'>
      <p>Contact Us</p>
      <p>Login</p>
      <button id="button1">sign Up</button>
      </div>
    </div>
    </div>
  )
}

export default Navbar
