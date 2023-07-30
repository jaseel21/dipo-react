import React from "react";
import Msearch from "../../components/Msearch/Msearch";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="Home-body">
      <div className="msearch-container">
        <div className="home-ms-left"><Msearch/></div>
        <div className="home-ms-right">
          <div className="home-img-container">
            <div className="discripton">
              <div className="dis-card">
                <p>
                  We offer a two-year Diploma in Arabic Language and a one-year
                  Diploma in Urdu Language. Our program is conducted by the
                  Alathurpadi Dars Student's Association, located in Melmuri,
                  Malappuram, Kerala.
                </p>
                <div className="add-button">
                  <button
                    onClick={() => {
                      navigate("/form");
                    }}
                    class="button0 button1"
                  >
                    ADD STUDENTS
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
}

export default Home;
