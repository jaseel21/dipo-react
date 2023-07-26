import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div>
      <footer class="footer">
        <div class="footer-container">
          <div class="row">
            <div class="footer-col">
              <h4>Adsa Diploma</h4>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
                <li>
                  <p>Copyright © 2021 Adsa Diploma All rights reserved</p>
                </li>
              </ul>
            </div>
            <div class="footer-col ">
              <h4>get help</h4>
              <ul>
                <li>
                  <a href="#">
                    <i class="fa-sharp fa-solid fa-location-dot"></i>
                  </a>
                </li>
                <li>
                  <p>
                    Alathoorpadi <br />
                    <b>Malappuram</b>
                  </p>
                </li>
                <li>
                  <a href="#">
                    <i class="fa-solid fa-phone"></i>
                  </a>
                </li>
                <li>
                  <p>+91 7510 689 698</p>
                </li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>About Our Dars</h4>
              <ul>
                <li>
                  <p>
                    Alathurpadi Dars is held at Alathurpadi Juma Masjid, a
                    historical Masjid situated in Alathurpadi town, has a
                    history of more than 100 years. With the boundless help of
                    the natives of Mahall, our Dars has more than 200 full-time
                    students and over 50 local students in between Isha-Maghrib
                    and Morning under the supervision of four Usthads.
                  </p>
                </li>
              </ul>
              <div class="social-links">
                <a href="https://www.facebook.com/alathoorpadidars/">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="https://twitter.com/alathurpadidars">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="https://www.instagram.com/alathurpadi_dars/?hl=en">
                  <i class="fab fa-instagram"></i>
                </a>
                <a href="https://www.youtube.com/channel/UCFy8GPprsV0sWsU5EIoeqMw">
                  <i class="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
