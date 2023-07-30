import React from 'react'
import './About.css'
import Image from '../assets/about.png'
import Footer from '../../components/Footer/Footer'

function About() {
  return (
    <div>
		<div className='about'>
        <div class="about-main">
			<img src={Image} alt=""/>
			<div class="all-text">
				<h4>About Us</h4>
				<h1>Adsa Diploma</h1>
				<p>We offer a two-year Diploma in Arabic Language and a one-year Diploma in Urdu Language, 
					accredited by the National Council for Promotion of Urdu Language (NCPUL), Ministry of 
					Human Resource Development, New Delhi. Our program is conducted by the Alathurpadi Dars 
					Student's Association, located in Melmuri, Malappuram, Kerala. <br/><br/>

					At our institute, we strive to provide a comprehensive and enriching learning 
					experience for our students. Our language courses are designed to help students 
					develop a strong foundation in both Arabic and Urdu, enabling them to effectively 
					communicate and understand these beautiful languages.
				</p>
			</div>
		</div>
		
    </div>
	<Footer/>
	</div>
  )
}

export default About