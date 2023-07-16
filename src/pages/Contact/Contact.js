import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <div className='contact-main'>
        <div class="container">
    <div class="content">
      <div class="left-side">
        <div class="address details">
          <i class="fas fa-map-marker-alt"></i>
          <div class="topic">Address</div>
          <div class="text-one">alathoorpadi, juma masjid</div>
          <div class="text-two">melmuri(po), malappuram, kerala</div>
        </div>
        <div class="phone details">
          <i class="fas fa-phone-alt"></i>
          <div class="topic">Phone</div>
          <div class="text-one">+91 7510 689 698</div>
          <div class="text-two">+91 7511 189 698</div>
        </div>
        <div class="email details">
          <i class="fas fa-envelope"></i>
          <div class="topic">Email</div>
          <div class="text-one">alathoorpadidars@gmail.com</div>
          <div class="text-two">adsaclab124@gmail.com</div>
        </div>
      </div>
      <div class="right-side">
        <div class="topic-text">Send us a message</div>
        <p>If you want to contact us for more details, you can send message from here. It's my pleasure to help you.</p>
      <form action="#">
        <div class="input-box">
          <input type="text" placeholder="Enter your name"/>
        </div>
        <div class="input-box">
          <input type="text" placeholder="Enter your email"/>
        </div>
        <div class="input-box message-box">
          <textarea name="" id="" cols="30" rows="10" placeholder='Enter your message'></textarea>
          
        </div>
        <div class="button">
          <input type="button" value="Send Now"/>
        </div>
      </form>
    </div>
    </div>
  </div>
    </div>
  )
}

export default Contact